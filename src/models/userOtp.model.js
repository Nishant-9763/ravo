const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    mobile: { type: Number },
    otp: { type: String },
  },
  {
    timestamps: true,
  }
);

const userOtp = mongoose.model("userOtp", userSchema);

module.exports = userOtp;
