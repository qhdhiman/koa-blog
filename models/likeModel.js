import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
  article: { type: Schema.Types.ObjectId, ref: 'Article' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  create_time: { type: Date, required: true, default: Date.now }
});

LikeSchema.index({ _id: 1 });
export default mongoose.model('Like', LikeSchema);