import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  name: { type: String, required: true },
  create_time: { type: Date, required: true, default: Date.now }
});

TagSchema.index({ _id: 1 });
export default mongoose.model('Tag', TagSchema);