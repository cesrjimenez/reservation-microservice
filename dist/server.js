"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apollo_server_express_1 = require("apollo-server-express");
var aws_serverless_express_1 = __importDefault(require("aws-serverless-express"));
var graphql_tools_1 = require("graphql-tools");
var cors_1 = __importDefault(require("cors"));
var graphQLSchema_1 = require("./modules/reservation/graphQLSchema");
var resolvers_1 = __importDefault(require("./modules/reservation/resolvers"));
var schema = graphql_tools_1.makeExecutableSchema({ typeDefs: graphQLSchema_1.typeDefs, resolvers: resolvers_1.default });
var server = new apollo_server_express_1.ApolloServer({ schema: schema });
var app = express_1.default();
app.use(cors_1.default());
app.options('*', cors_1.default());
server.applyMiddleware({ app: app });
var handler = aws_serverless_express_1.default.createServer(app);
exports.handler = function (event, context) { return aws_serverless_express_1.default.proxy(handler, event, context); };
//# sourceMappingURL=server.js.map