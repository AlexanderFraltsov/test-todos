import { DEFAULT_PORT } from '../../backend/src/common/constants';

const PORT = DEFAULT_PORT;
const BACKEND_PATH = `http://localhost:${PORT}`;
const SERVER_PATHS: {[key: string]: string} = {
  POSTS: '/posts',
  SWAGGER: '/doc'
};

export { BACKEND_PATH, SERVER_PATHS };
