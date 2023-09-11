import express from 'express';
import { createServer } from 'vite';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexHTML = path.resolve(__dirname, 'index.html');

const PORT = process.env.PORT || 3001;

const getStyleSheets = async () => {
  return `<link rel="stylesheet" href="./src/index.css" />`;
};

async function startServer() {
  const app = express();
  const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });

  app.use(vite.middlewares);

  const stylesheets = getStyleSheets();

  app.use('*', async (request, response, next) => {
    const url = request.originalUrl;

    try {
      const template = fs.readFileSync(indexHTML, 'utf8');
      const transformHTML = await vite.transformIndexHtml(url, template);
      const [startHTML, endHTML] = transformHTML.split('<!--ssr-outlet-->');

      const { render } = await vite.ssrLoadModule('./src/entry-server.tsx');
      const cssAssets = await stylesheets;
      const newStartHTML = startHTML.replace(`<!--dev-css-->`, cssAssets);

      response.write(newStartHTML);

      const { stream, injectPreload } = await render(url, {
        bootstrapModule: ['./src/entry-client.tsx'],
        onShellReady() {
          stream.pipe(response);
        },

        onAllReady() {
          let withPreload = endHTML.replace('<!--preload-->', injectPreload());
          response.write(withPreload);
          response.end();
        },
        onError(err: Error) {
          console.error(err);
        },
      });
    } catch (error) {
      console.error(error);
      vite.ssrFixStacktrace(error as Error);
      next(error);
    }
  });

  return app;
}

startServer().then((app) => {
  app.listen(PORT, () => {
    console.log(`Server is running >>> http://localhost:${PORT}`);
  });
});
