const { fileLoader, mergeTypes } = require('merge-graphql-schemas');
const { join } = require('path');

const typesArray = fileLoader(join(__dirname, 'modules', '**', '*.gql'));
const typeDefs = mergeTypes(typesArray);


module.exports = typeDefs;
