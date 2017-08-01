import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  owner: {type: Schema.Types.ObjectId, required: true, ref: 'User'},
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String] },
  comments: [{type: Schema.Types.ObjectId, required: true, ref: 'Comment'}],
  create_time: { type: Date, required: true, default: Date.now }
});
ArticleSchema.index({ _id: 1 });
export default mongoose.model('Article', ArticleSchema);