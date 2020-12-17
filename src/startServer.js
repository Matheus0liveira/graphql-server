const { ApolloServer } =  require('apollo-server');

const startServer = ({typeDefs, resolvers}) => {

  const server = new ApolloServer({typeDefs, resolvers});

  server.listen().then(({ url }) => console.log(`🔥 Server started at: ${url}`));

};

module.exports = startServer;