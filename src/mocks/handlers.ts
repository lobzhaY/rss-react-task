import { rest } from 'msw';
import { mockValueItem, mockValueSearch } from '../test/mock';

export const handlers = [
  rest.get(
    `${import.meta.env.VITE_URL_API_SEARCH}?query='photo'&client_id=${
      import.meta.env.VITE_AUTHORIZATION
    }`,
    (req, res, ctx) => {
      const isAuthenticated = import.meta.env.VITE_AUTHORIZATION;
      if (!isAuthenticated) {
        return res(
          ctx.status(403),
          ctx.json({
            errorMessage: 'Not authorized',
          })
        );
      }
      return res(
        ctx.status(200),
        ctx.json({
          total: 10,
          total_pages: 2,
          results: [mockValueSearch],
        })
      );
    }
  ),
  rest.get(
    `${import.meta.env.VITE_URL_API_GET_ONE}/F_-0BxGuVvo?client_id=${
      import.meta.env.VITE_AUTHORIZATION
    }`,
    (req, res, ctx) => {
      const isAuthenticated = import.meta.env.VITE_AUTHORIZATION;
      if (!isAuthenticated) {
        return res(
          ctx.status(403),
          ctx.json({
            errorMessage: 'Not authorized',
          })
        );
      }
      return res(ctx.status(200), ctx.json(mockValueItem));
    }
  ),
];

export default handlers;
