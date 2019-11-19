//  modules
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
// const { ApolloServer } = require('apollo-server'); // local testing
import awsServerlessExpress from 'aws-serverless-express';
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import sls from 'serverless-http'
import cors from 'cors';

// local
import { typeDefs } from './modules/reservation/graphQLSchema';
import resolvers from './modules/reservation/resolvers';

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

// Initialize Apollo server
const server = new ApolloServer({ schema });

const app = express();

app.use(cors());
app.options('*', cors());

// Added Express as middleware in Apollo server
server.applyMiddleware({ app });

// const PORT = process.env.PORT || 5000;

// Set the port that the Express application will listen to for testing
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:5000${ server.graphqlPath }`);

//   console.log(`Server listening on ${PORT}`)
// });

const handler = awsServerlessExpress.createServer(app)

exports.handler = (event: any, context: any) => awsServerlessExpress.proxy(handler, event, context)
