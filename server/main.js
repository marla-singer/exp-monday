import graphqlHTTP  from 'express-graphql';
import graphQLSchema from 'swagger-to-graphql';

let defaultSchema;

graphQLSchema('/home/daria/develop/graphql/swagger.json')
    .then(schema => defaultSchema = schema)
    .catch(e => console.error(e));

WebApp.connectHandlers.use('/graphql', graphqlHTTP(() => (
    { 
        schema: defaultSchema,
        context: {
                GQLProxyBaseUrl: 'https://nightly.apinf.io/rest/v1',
        },
        graphiql: true,
    }
)));