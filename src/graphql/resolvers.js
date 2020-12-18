const { fileLoader, mergeResolvers } = require('merge-graphql-schemas');
const { join } = require('path');

const resolversArray = fileLoader(join(__dirname, 'modules', '**', 'resolvers.js'));
const resolvers = mergeResolvers(resolversArray);


module.exports = resolvers;
