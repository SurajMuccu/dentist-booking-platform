import Dentist from "../models/Dentist.js"

// GET all dentists
export const getDentists = async (req, res) => {
  try {

    const dentists = await Dentist.find()

    res.json(dentists)

  } catch (error) {

    res.status(500).json({ message: "Server error" })

  }
}


// ADD dentist
export const addDentist = async (req, res) => {
  try {

    const dentist = new Dentist(req.body)

    const savedDentist = await dentist.save()

    res.status(201).json(savedDentist)

  } catch (error) {

    console.error(error)

    res.status(400).json({ message: "Error adding dentist" })

  }
}