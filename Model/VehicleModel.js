import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
 
  license_plate: { type: String, required: true },
  driver_name: { type: String, required: true },
  gps_coordinates: { type: String }, // You might want to use a more complex type for latitude and longitude
  status: { type: String, enum: ['Available', 'In-Service', 'Maintenance'], required: true },
  fuel_usage: { type: Number },
  route_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Route' },
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;
