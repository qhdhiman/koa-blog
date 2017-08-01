import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  article: { type: Schema.Types.ObjectId, ref: 'Article' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  comment: String,
  create_time: { type: Date, required: true, default: Date.now }
});

CommentSchema.index({ _id: 1 });
export default mongoose.model('Comment', CommentSchema);