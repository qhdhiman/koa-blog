import jwt from 'jsonwebtoken';
import {secret} from '../utils/settings'

/**
 * 签名token
 * @param data
 * @returns {*}
 */
const sign = ({_id}) => {
  return jwt.sign({_id}, secret, {expiresIn:'30d'})
}
/**
 * 解密token
 * @param token
 * @returns {*}
 */
const verify = (token) =>{
  return jwt.verify(token, secret)  // // 解密，获取payload
}
/**
 * 验证token
 * @param cxt
 * @returns {*}
 */
const verifyByHeader = (ctx) => {
  const token = ctx.header.authorization.split(' ')[1]
  return verify(token)
}
export default {
  sign,
  verify,
  verifyByHeader
}