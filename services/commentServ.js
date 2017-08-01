import {CommentModel} from '../models/index';

/**
 * 添加评论
 * @param article
 * @param user
 * @param comment
 * @returns {Promise.<*>}
 */
const add = async ({article, user, comment}) => {
  let res = await CommentModel.create({article, user, comment});
  return res;
};
/**
 * 获取文章的评论内容
 * @param articleId
 * @returns {Promise.<*>}
 */
const findByArticleId = async (articleId) => {
  let res = await CommentModel.find({article: articleId}).sort({create_time: '-1'}).exec();
  return res;
};

export default {
  add,
  findByArticleId
}