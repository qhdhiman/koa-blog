import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
  name: { type: String, required: true },
  create_time: { type: Date, required: true, default: Date.now }
});

SessionSchema.index({ _id: 1 });
export default mongoose.model('Session', SessionSchema);