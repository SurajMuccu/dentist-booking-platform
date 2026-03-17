import Appointment from "../models/Appointment.js"

export const createAppointment = async (req, res) => {

  try {

    const appointment = new Appointment(req.body)

    const saved = await appointment.save()

    res.status(201).json(saved)

  } catch (error) {

    res.status(400).json({ message: "Error booking appointment" })

  }

}

export const getAppointments = async (req, res) => {

  try {

    const appointments = await Appointment.find()

    res.json(appointments)

  } catch (error) {

    res.status(500).json({ message: "Server error" })

  }

}