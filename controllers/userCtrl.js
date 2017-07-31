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
  const exits = await UserServ.exits(request.name, request.phone);
  if (exits) {
    const msg = exits.name == request.name ? '用户名已存在' : '手机号已存在';
    ctx.body = Resp({
      isOk: false,
      data: msg
    })
  } else {
    const user = {
      name: request.name,
      phone: request.phone,
      password: request.password,
      head: '/static/avatar.jpg'
    }
    let res = await UserServ.signup(user);
    const token = jwtUtil.sign({_id: res._id });  //token签名 有效期为30天
    ctx.body = Resp({
      data: {
        _id: res._id,
        name: res.name,
        phone: res.phone,
        head: res.head,
        token
      }
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