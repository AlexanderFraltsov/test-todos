import { PORT } from '../../backend/src/common/config';

const BACKEND_PATH = `http://localhost:${PORT}`;
const SERVER_PATHS: {[key: string]: string} = {
  POSTS: '/posts',
  SWAGGER: '/doc'
};

export { BACKEND_PATH, SERVER_PATHS };
