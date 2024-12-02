import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, auto: true, primaryKey: true },
  FullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String },
  phone_number: { type: String },
  role: { 
    type: String, 
    enum: ['Resident', 'Waste Management Employee', 'Municipal Authority'], 
    default: 'Resident', 
    required: true 
  },
  subscription_plan_id: { type: mongoose.Schema.Types.ObjectId, ref: 'SubscriptionPlan' },
});

const User = mongoose.model('User', userSchema);

export default User;
