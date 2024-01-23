const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: Number },
    state: { type: String },
    notName: { type: String },
    selectedCargoVehicle: { type: String },
    load: { type: String },
    selectedVehicleType: { type: String },
    seat: { type: String },
    selectedSeaterVehicle: { type: String },
    district: { type: String },
    town_taluka: { type: String },
    vechileType: {
      type: String,
    },
    notName: {
      type: String,
    },
    fuel: {
      type: String,
    },
    fare: { type: String },
    vechileSeater: {
      type: String,
    },
    vechileNo: { type: String },
    acStatus: { type: String },
    selectedImages: [String],
    desc: { type: String },
    title: { type: String },
    otp: { type: Number },
  },
  {
    timestamps: true,
  }
);

const userData = mongoose.model("userData", userSchema);

module.exports = userData;
