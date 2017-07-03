import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  create_time: { type: Date, required: true, default: Date.now }
});

ArticleSchema.index({ _id: 1 });
export default mongoose.model('Article', ArticleSchema);