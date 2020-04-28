const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const jwtVerifier = require('express-jwt');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://laurentiu:steaua123@librarycatalog-ezbff.mongodb.net/librarydb?retryWrites=true&w=majority', {
  useNewUrlParser:true,
  useUnifiedTopology:true
});

mongoose.connection.once('open',()=>{
  console.log('connected to db')
});

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql:true
}));

app.listen(4000,() => {
  console.log('listening for requests on port 4000')
});
