import mongoose from 'mongoose';

const recyclingPointSchema = new mongoose.Schema({
  point_id: { type: mongoose.Schema.Types.ObjectId, auto: true, primaryKey: true },
  location_name: { type: String, required: true },
  address: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  material_types: { type: [String], required: true }, // Array of material types
  operating_hours: { type: String, required: true },
});

const RecyclingPoint = mongoose.model('RecyclingPoint', recyclingPointSchema);

export default RecyclingPoint;
