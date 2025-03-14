const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  disease: String,
  description: String,
  clinicalHistory: String,
  findings: String,
  doctorName: String,
  reportUrl: String,
  time: {
    type: Date,
  },
  recordType: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Report", ReportSchema);
