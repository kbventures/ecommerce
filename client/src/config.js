export const BACKEND_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4001'
    : `${process.env.BACKEND_URL}`;

console.log(process.env.NODE_ENV);
console.log(process.env.BACKEND_URL);
