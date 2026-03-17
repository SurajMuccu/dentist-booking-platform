import mongoose from "mongoose"

const appointmentSchema = new mongoose.Schema({

  patientName: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: true
  },

  gender: {
    type: String,
    required: true
  },

  appointmentDate: {
    type: Date,
    required: true
  },

  dentistName: {
    type: String,
    required: true
  },

  clinicName: {
    type: String,
    required: true
  }

}, { timestamps: true })

export default mongoose.model("Appointment", appointmentSchema)