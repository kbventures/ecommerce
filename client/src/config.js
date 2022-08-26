export const BACKEND_URL =
process.env.NODE_ENV === 'development'
  ? 'http://localhost:4001/items'
  : `${process.env.BACKEND_URL}/items`;

