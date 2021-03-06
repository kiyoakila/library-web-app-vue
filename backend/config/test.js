const os = require('os');

module.exports = {
  env: 'test',

  database: {
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false,
    operatorsAliases: false,
  },

  email: {
    auth: {
      user: 'mock',
    },
  },

  graphiql: false,

  clientUrl: 'http://localhost:8081',

  defaultUser: '<insert your email here>',

  uploadDir: os.tmpdir(),

  authJwtSecret: 'abc',
};
