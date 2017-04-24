// Node packages
import Hapi from 'hapi';

// Personal files
import mafia from './mafia';
import config from './config/testing';

const PORT = process.env.PORT || 80;


if (!(config)) {
  console.error("Missing config values");
  process.exit(1);
}

const server = new Hapi.Server();
server.connection({ port: PORT, host: '0.0.0.0' });
server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply("Hello");
  }
});

server.start((err) => {
  if (err) throw err;

  console.log(`Server running at: ${server.info.uri}`);
});
