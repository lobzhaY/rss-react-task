import { rest } from 'msw';
import { mockValueItem, mockValueSearch } from '../test/mock';
import { AUTHORIZATION, TEST_ID, URL_API_GET_ONE, URL_API_SEARCH } from '../constants/constants';

export const handlers = [
  rest.get(`${URL_API_SEARCH}?query='photo'&client_id=${AUTHORIZATION}`, (req, res, ctx) => {
    const isAuthenticated = AUTHORIZATION;
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
  }),
  rest.get(`${URL_API_GET_ONE}/${TEST_ID}?client_id=${AUTHORIZATION}`, (req, res, ctx) => {
    const isAuthenticated = AUTHORIZATION;
    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        })
      );
    }
    return res(ctx.status(200), ctx.json({ mockValueItem }));
  }),
];

export default handlers;
