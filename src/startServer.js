const { ApolloServer, PubSub } =  require('apollo-server');

const mongoose = require('mongoose');



const startServer = ({typeDefs, resolvers}) => {

  mongoose.connect('mongodb://localhost:27017/graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('🏃 Mongo started'));

  const pubsub = new PubSub();

  const server = new ApolloServer({typeDefs, resolvers, context: { pubsub}});

  server.listen().then(({ url }) => console.log(`🔥 Server started at: ${url}`));

};

module.exports = startServer;