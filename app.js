const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Import routes
const postsRoute = require('./routes/posts');

//Middleware
app.use(cors())
app.use(express.json());
app.use('/posts', postsRoute);

//Mongoose Local connect
mongoose.connect('mongodb://localhost:27017/restful_api', 
{useNewUrlParser: true})
  .then(console.log('Connected successfully to Database'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello')
}); 

app.listen(3000);