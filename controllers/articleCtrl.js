// app/controllers/user.js
import ArticleServ from '../services/articleServ';

// todo-app首页，渲染所有ToDo，并可以新建ToDo
const findById = async (ctx, next) => {
  const articles = await ArticleServ.findById();
  await ctx.render('article/list', {
    articles: articles
  });
};

// 通过表单的post新建一个ToDo，并返回列表页
const add = async (ctx, next) => {
  const requestData = ctx.request.body;
  const article = {
    title: 'new article',
    content: 'test article'
  }
  await ArticleServ.add(article);
  ctx.body = '添加成功'
};

export default {
  findById,
  add
}