import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  user_id: {type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String] },
  create_time: { type: Date, required: true, default: Date.now }
});

ArticleSchema.index({ _id: 1 });
export default mongoose.model('Article', ArticleSchema);