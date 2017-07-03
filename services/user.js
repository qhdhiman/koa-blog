// app/services/user.js
import {User} from '../models/index';

const getUsers = () => {
  return new Promise((resolve, reject) => {
    User.find().exec().then((result) => {
      resolve(result);
    });
  });
};

const addUser = (options) => {
  return new Promise((resolve, reject) => {
    User.create(options).then((result) => {
      resolve(result);
    });
  });
};

export default {
  getUsers,
  addUser
}