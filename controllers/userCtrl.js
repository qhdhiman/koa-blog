// app/controllers/user.js
import jwtUtil from '../utils/jwtUtil';

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
  if (res) {
    const token = jwtUtil.sign({_id: res._id });  //token签名 有效期为30天
    res.token = token;
    ctx.body = Resp({
      data: {
        token: token
      }
    })
  } else {
    ctx.body = Resp({
      isOk: false,
      data: '用户名或密码错误'
    })
  }
};
/**
 * 根据token获取用户信息
 * @param ctx
 * @param next
 * @returns {Promise.<void>}
 */
const getLoginUser = async (ctx, next) => {
  // const token = ctx.header.authorization;
  const token = ctx.request.body.token;
  if (token) {
    const payload = jwtUtil.verify(token) // 解密，获取payload
    if (payload) {
      const user = await UserServ.findById(payload._id)
      ctx.body = Resp({
        data: user
      })
    } else {
      ctx.body = Resp({
        isOk: false,
        data: '解析token失败'
      })
    }
  } else {
    ctx.body = Resp({
      isOk: false,
      data: 'token无效'
    })
  }
}

export default {
  signup,
  signin,
  getLoginUser
}