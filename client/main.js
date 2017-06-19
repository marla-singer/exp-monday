import { Template } from 'meteor/templating';

import './main.html';
import '/node_modules/graphiql/graphiql.css';

import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';


Template.editor.helpers({
    GraphiQL () {
        return GraphiQL;
    },
    graphFetcher () {
        return (graphQLParams) => fetch(window.location.origin + '/graphql', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(graphQLParams),
        }).then(response => response.json());
    },
});
