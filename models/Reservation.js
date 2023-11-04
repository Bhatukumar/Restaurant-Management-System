import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  fullName: {
    type: "string",
    required: true,
  },
  phoneNumber: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  persons: {
    type: "number",
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
});

export default mongoose.models.Reservation ||
  mongoose.model("Reservation", ReservationSchema);
