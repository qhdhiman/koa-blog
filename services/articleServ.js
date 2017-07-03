// app/services/user.js
import {ArticleModel} from '../models/index';

const findById = async (id) => {
  try {
    const res = await ArticleModel.find().exec()
    return res
  } catch (e) {
    throw e
  } 
};

const add = async (options) => {
  try {
    const res = await ArticleModel.create(options);
    return res;
  } catch (e) {
    throw e;
  }
};

export default {
  findById,
  add
}