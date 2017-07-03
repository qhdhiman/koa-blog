// app/models/todo.js
// 定义数据结构
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// 定义TodoSchema数据表和数据结构
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true},
  head: { type: String, required: true, default: 'a.com' }
});

// 使用content字段作为索引
UserSchema.index({email: 1});
// 使用Todo名称来调用表
export default mongoose.model('User', UserSchema);