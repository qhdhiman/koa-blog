// app/controllers/user.js
import UserServ from '../services/userServ';
import Resp from '../utils/resp'

const users = async (ctx, next) => {
  const users = await User.getUsers();
  await ctx.render('user/list', {
    users: users,
    csrf: ctx.csrf,
    title: 'user index'
  });
};
/**
 * 注册
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
const signup = async (ctx, next) => {
  const request = ctx.request.body;
  console.log('requestData', request)
  const exits = await UserServ.findByPhone(request.phone);
  if (exits) {
    ctx.body = Resp({
      isOk: false,
      data: '手机号已存在'
    })
  } else {
    const user = {
      name: request.name,
      phone: request.phone,
      password: request.password,
      head: '/static/avatar.jpg'
    }
    const res = await UserServ.signup(user);
    ctx.body = Resp({
      data: res
    })

  }
};
/**
 * 登录
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
const signin = async (ctx, next) => {
  const request = ctx.request.body;
  const user = {
    name: request.name,
    password: request.password
  }
  const res = await UserServ.signin(user);
  ctx.body = Resp({
    data: res
  })
};

export default {
  signup,
  signin
}