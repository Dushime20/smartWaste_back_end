import mongoose from 'mongoose';

const routeSchema = new mongoose.Schema({
  route_id: { type: mongoose.Schema.Types.ObjectId, auto: true, primaryKey: true },
  route_name: { type: String, required: true },
  area_covered: { type: String, required: true },
  collection_days: [{ type: String, required: true }], // e.g., ['Monday', 'Thursday']
  vehicle_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
  status: { type: String, enum: ['Active', 'Inactive'], required: true },
});

const Route = mongoose.model('Route', routeSchema);

export default Route;
