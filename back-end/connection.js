const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://chap-app:nodejs@cluster0.qnmhb.mongodb.net/?retryWrites=true&w=majority", ()=> {
  console.log('connected to mongodb')
})
