const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const config = {
    host: 'localhost',
    port: 9000,
};

const init = async (conf) => {
    const server = Hapi.server({
        host: conf.host,
        port: conf.port,
        routes: {
            cors: true,
        },
    });

    server.route(routes);

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
    return server;
};

init(config);
