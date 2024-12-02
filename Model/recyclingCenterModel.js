import mongoose from 'mongoose';

const recyclingCenterSchema = new mongoose.Schema({
  center_id: { type: mongoose.Schema.Types.ObjectId, auto: true, primaryKey: true },
  center_name: { type: String, required: true },
  address: { type: String, required: true },
  materials_accepted: { type: [String], required: true }, // Array of accepted materials
  operating_hours: { type: String, required: true },
});

const RecyclingCenter = mongoose.model('RecyclingCenter', recyclingCenterSchema);

export default RecyclingCenter;
