import express from 'express';
import { createServer } from 'vite';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexHTML = path.resolve(__dirname, 'index.html');

const PORT = process.env.PORT || 3001;

const resolve = (p: string) => path.resolve(__dirname, p);

const getStyleSheets = async () => {
  /* try {
    const assetPath = resolve("dist/assets");
    const files = await fs.readdir(assetPath, (err, files) => {
      if (err)
    console.log(err);
  else {
    console.log("\nCurrent directory filenames:");
    return files.filter(l => l.endsWith(".css"));
  }
    });

    const cssAssets = files.filter(l => l.endsWith(".css"));
    const allContent: string[] = [];
    for (const asset of cssAssets) {
      const content = await fs.readFile(path.join(assetPath, asset), "utf-8");
      allContent.push(`<style type="text/css">${content}</style>`);
    }
    return allContent.join("\n");
  } catch {
    return "";
  } */

  const style = './assets/' + fs.readdirSync(resolve('./dist/client/assets')).filter((fn: string) => fn.includes('css'));

  console.log(style);
  console.log(`<link rel="stylesheet" type="text/css" href="${style}">`);
  return `<link rel="stylesheet" type="text/css" href="${style}">`;
};

/* const cssUrls = new Set(), cssJsUrls = new Set()
function collectCssUrls(mod) {
  mod.importedModules.forEach(submod => {
    if (submod.id.match(/\?vue.*&lang\.css/)) return cssJsUrls.add(submod.url)
    if (submod.file.endsWith(".css")) return cssUrls.add(submod.url)
    if (submod.file.endsWith(".vue")) return collectCssUrls(submod)
    if (submod.file.match(/route/)) return collectCssUrls(submod)
  })
}
let render
if (!isProd) {
  render = (await vite.ssrLoadModule("/src/entry-server.js")).render
  const mod = await vite.moduleGraph.getModuleByUrl('/src/app.js')
  cssUrls = mod.ssrTransformResult.deps.filter(d => d.endsWith(".css"))
} else {
  render = require("./dist/server/entry-server.js").render
}
const [appHtml] = await render(url, manifest)
const devCss = [...cssUrls].map(url => {
  return `<link rel="stylesheet" type="text/css" href="${url}">`
}).join("") + [...cssJsUrls].map(url => {
  return `<script type="module" src="${url}"></script>`
}).join("")
const html = template.replace(`<!--app-html-->`, appHtml).replace(`<!--dev-css-->`, devCss) */

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
