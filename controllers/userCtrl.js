// app/controllers/user.js
import UserServ from '../services/userServ';

// todo-app首页，渲染所有ToDo，并可以新建ToDo
const users = async (ctx, next) => {
  const users = await User.getUsers();
  await ctx.render('user/list', {
    users: users,
    csrf: ctx.csrf,
    title: 'user index'
  });
};

// 通过表单的post新建一个ToDo，并返回列表页
const addUser = async (ctx, next) => {
  const requestData = ctx.request.body;
  const user = {
    name: 'name',
    email: 'qhdhiman@qq.com',
    head: 'aa.com'
  }
  await UserServ.add(user);
  // ctx.redirect('/user');
  ctx.body = '添加成功'
};

export default {
  addUser,
  users
}