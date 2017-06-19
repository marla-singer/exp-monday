import graphqlHTTP  from 'express-graphql';
import schema from '../lib/schema';

// Listen to incoming HTTP requests (can only be used on the server).
WebApp.connectHandlers.use('/graphql', graphqlHTTP(() => ({ schema, graphiql: true })));
