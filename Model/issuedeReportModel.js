import mongoose from 'mongoose';

const issueReportSchema = new mongoose.Schema({
  
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  issue_type: { type: String, enum: ['Missed Pickup', 'Overflow', 'Illegal Dumping'], required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Resolved'], required: true },
  date_reported: { type: Date, default: Date.now },
  assigned_to: { type: String }, // Employee handling the report
});

const IssueReport = mongoose.model('IssueReport', issueReportSchema);

export default IssueReport;
