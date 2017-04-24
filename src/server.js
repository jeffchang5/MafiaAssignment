'use strict';

// Node packages
import Hapi from 'hapi';

// Personal files
import mafia from './mafia';
import config from './config/testing';
import Inert from 'inert';

const PORT = process.env.PORT || 80;


if (!(config)) {
  console.error("Missing config values");
  process.exit(1);
}

const server = new Hapi.Server();
server.connection({ port: PORT, host: '0.0.0.0' });
server.register(Inert, (err) => {
    if(err) {
      throw err;
    }
    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: 'public'
        }
      }
    });
  }


);
server.start((err) => {
  if (err) throw err;

  console.log(`Server running at: ${server.info.uri}`);
});
