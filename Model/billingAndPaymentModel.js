import mongoose from 'mongoose';

const billingPaymentSchema = new mongoose.Schema({
  bill_id: { type: mongoose.Schema.Types.ObjectId, auto: true, primaryKey: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount_due: { type: Number, required: true },
  due_date: { type: Date, required: true },
  payment_status: { type: String, enum: ['Paid', 'Unpaid'], required: true },
  payment_method: { type: String, required: true },
  date_paid: { type: Date },
});

const BillingPayment = mongoose.model('BillingPayment', billingPaymentSchema);

export default BillingPayment;
