// app/models/index.js
import mongoose from 'mongoose';

const promise = mongoose.connect('mongodb://127.0.0.1:27017/blog', {
  useMongoClient: true,
  /* other options */
});
promise.then(function(db) {
  console.log('connected')
}).catch(err => {
  if (err) {
    console.error('connect to %s error: ', 'blog', err.message);
    process.exit(1);
  }
})

import User from './user';
export default {User};
