// app/controllers/user.js
import UserServ from '../services/userServ';
import Resp from '../utils/resp'

// todo-app首页，渲染所有ToDo，并可以新建ToDo
const users = async (ctx, next) => {
  const users = await User.getUsers();
  await ctx.render('user/list', {
    users: users,
    csrf: ctx.csrf,
    title: 'user index'
  });
};

const signup = async (ctx, next) => {
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
const signin = async (ctx, next) => {
  const requestData = ctx.request.body;
  const user = {
    name: 'name',
    email: 'qhdhiman@qq.com',
    head: 'aa.com'
  }
  await UserServ.signin(user);
  // ctx.redirect('/user');
  ctx.body = Resp({
    data: { user: 'asdsfaads'}
  })
};

export default {
  signup,
  signin
}