import {LikeModel} from '../models/index';

/**
 * 添加点赞
 * @param article
 * @param user
 * @returns {Promise.<*>}
 */
const add = async ({article, user}) => {
  let res = await LikeModel.create({article, user});
  return res;
};
/**
 * 取消点赞
 * @param article
 * @param user
 * @returns {Promise.<*>}
 */
const remove = async ({article, user}) => {
  console.log({article, user})
  let res = await LikeModel.findOneAndRemove({'article': article, 'user': user});
  return res;
};

export default {
  add,
  remove
}