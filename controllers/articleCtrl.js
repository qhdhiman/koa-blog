// app/controllers/user.js
import ArticleServ from '../services/articleServ';
import CommentServ from '../services/commentServ';
import resp from '../utils/resp';
import jwtUtil from '../utils/jwtUtil';

/**
 * 分页公用方法
 * @param ctx
 * @returns {page: Number, limit: Number}
 */
const pageQuerys = (ctx) => {
  return {
    page: parseInt(ctx.query.page || 0),
    limit: parseInt(ctx.query.limit || 20)
  }
}

/**
 * 获取一个文章by {_id}
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
const findById = async (ctx, next) => {
  const _id = ctx.params._id;
  const res = await ArticleServ.findById(_id);
  ctx.body = resp({
    data: res
  });

};
/**
 * 获取全部文章
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
const findAll = async (ctx, next) => {
  const query = pageQuerys(ctx);
  let res = await ArticleServ.findAll(query);
  ctx.body = resp({
    data: res
  });

};

/**
 * 获取全部文章 by {owner}
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
const findByUserId = async (ctx, next) => {
  const userId = ctx.params.userId;
  const query = pageQuerys(ctx);
  console.log('userId', userId)
  const res = await ArticleServ.findByUserId(userId, query);
  ctx.body = resp({
    data: res
  });

};

// 通过表单的post新建一个ToDo，并返回列表页
const add = async (ctx, next) => {
  const payload = jwtUtil.verifyByHeader(ctx)  // // 解密，获取payload
  const userId = payload._id;
  const query = ctx.request.body;
  const article = {
    owner: userId,
    title: query.title,
    content: query.content,
    tags: query.tags && query.tags.split(',')
  }
  let res = await ArticleServ.add(article);
  ctx.body = resp({
    data: res
  })
};
/**
 * 评论
 * @param ctx
 * @param next
 */
const comment = async (ctx, next) => {
  const payload = jwtUtil.verifyByHeader(ctx)  // // 解密，获取payload
  const userId = payload._id;
  const query = ctx.request.body;
  const _comment = {
    user: userId,
    article: query.articleId,
    comment: query.comment
  }
  let res = await CommentServ.add(_comment);
  await ArticleServ.addComment(res.article, res._id);
  ctx.body = resp({
    data: res
  })
};
/**
 * 点赞
 * @param ctx
 * @param next
 */
const like = async (ctx, next) => {
  ctx.body = resp({
    data: ''
  })
};
/**
 * 收藏
 * @param ctx
 * @param next
 */
const favorite = async (ctx, next) => {
  ctx.body = resp({
    data: ''
  })
};

export default {
  findById,
  findByUserId,
  findAll,
  add,
  comment,
  like,
  favorite
}