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
  const requestData = ctx.request.body;
  console.log('requestData', requestData)
  const user = {
    name: 'name',
    email: 'qhdhiman@qq.com',
    head: 'aa.com'
  }
  const exits = await UserServ.findByPhone(user.phone);
  if (exits) {
    ctx.body = Resp({
      isOk: false,
      data: '手机号已存在'
    })
  } else {
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
  const query = ctx.request.body;
  const user = {
    name: query.name,
    phone: query.phone,
    head: 'aa.com'
  }
  await UserServ.signin(user);
  ctx.body = Resp({
    data: user
  })
};

export default {
  signup,
  signin
}