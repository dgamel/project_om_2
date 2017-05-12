// this file contains all of the credentials and connection details for the
// databases that Knex will use in this application will

// cfenv gives us easy access to Cloud Foundry environment variables
const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();
const credentials = appEnv.getServiceCreds('buggy');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'shoppingcart_dev',
      host : '127.0.0.1'
      // user:     'username',
      // password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory:  '/seeds/bookshelf'
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      database: 'shoppingcart_test',
      host : '127.0.0.1',
      // user:     'username',
      // password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: '/seeds/bookshelf'
    }
  },

  production: {
    client: 'mysql',
    connection: credentials ? credentials.uri : null,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: '/seeds/bookshelf'
    }
  }
};
