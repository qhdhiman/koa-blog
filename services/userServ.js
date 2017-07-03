// app/services/user.js
import {UserModel} from '../models/index';

const getUsers = () => {
  return new Promise((resolve, reject) => {
    UserModel.find().exec().then((result) => {
      resolve(result);
    });
  });
};

const add = (options) => {
  return new Promise((resolve, reject) => {
    UserModel.create(options).then((result) => {
      resolve(result);
    });
  });
};

export default {
  getUsers,
  add
}