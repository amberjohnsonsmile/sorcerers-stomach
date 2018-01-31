module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql:///harry-potter'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
