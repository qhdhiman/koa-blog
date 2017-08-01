import { ArticleModel } from '../models/index';

/**
 * 获取一条文章by _id
 * @param _id
 * @returns {Promise.<*>}
 */
const findById = async (_id) => {
  try {
    const res = await ArticleModel.findOne({_id: _id}).exec()
    return res
  } catch (e) {
    throw e
  } 
};
/**
 * 获取全部文章by用户id
 * @returns {Promise.<*>}
 */
const findByUserId = async (userId, {page=0, limit=20}) => {
  try {
    const res = await ArticleModel.find({owner: userId}).populate('owner', 'name head phone').skip(page * limit).limit(limit).exec()
    return res
  } catch (e) {
    throw e
  }
};
/**
 * 获取全部文章
 * @returns {Promise.<*>}
 */
const findAll = async ({page=0, limit=20}) => {
  try {
    const res = await ArticleModel.find().populate('owner', 'name head phone').populate({ path: 'comments', populate: { path: 'user' }}).skip(page * limit).limit(limit).sort({'_id': -1}).exec()
    return res
  } catch (e) {
    throw e
  }
};
/**
 * 新增新文章
 * @param options
 * @returns {Promise.<*>}
 */
const add = async (options) => {
  try {
    const res = await ArticleModel.create(options);
    return res;
  } catch (e) {
    throw e;
  }
};
/**
 * 更新评论
 * @param options
 * @returns {Promise.<*>}
 */
const addComment = async (_id, commentId) => {
  console.log(_id, commentId)
  const res = await ArticleModel.findByIdAndUpdate(_id, { $push: {comments: commentId}});
  return res;
};

export default {
  findById,
  findByUserId,
  findAll,
  add,
  addComment
}