// This file is the initial starting point for the Node/Express server.
const express = require('express');
// const routes = require('./routes');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
// this is the apollo server that is used to connect to the graphql server
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const app = express();
const PORT = process.env.PORT || 3001;
const { authMiddleware } = require('./utils/auth');

// this is the apollo server that is used to connect to the graphql server
const server = new ApolloServer({ typeDefs, resolvers, context: authMiddleware });

server.applyMiddleware({ app });
// this express middleware will parse the incoming request body and make it available on req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const __dirname = path.resolve();
const buildPath = path.join(__dirname, 'client', 'build');
app.use(express.static(buildPath));
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
// this should be the last route used
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
// this should open the connection to the database and then start the API server
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
