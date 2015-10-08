'use strict';

var Path = require('path');
var Hapi = require('hapi');
var Inert = require('inert');

var server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'build')
            }
        }
    }
});
server.connection({ port: 3000 });
server.register(Inert, function () {});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '.',
            redirectToSlash: true,
            index: true
        }
    }
});


server.start(function () {
    console.log('Server running at:', server.info.uri);
});