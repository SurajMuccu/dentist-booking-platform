import Admin from "../models/Admin.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const loginAdmin = async (req, res) => {

  try {

    const { email, password } = req.body

    console.log("LOGIN REQUEST:", email, password)

    const admin = await Admin.findOne({ email })

    console.log("ADMIN FOUND:", admin)

    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const match = await bcrypt.compare(password, admin.password)

    console.log("PASSWORD MATCH:", match)

    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    const token = jwt.sign(
      { id: admin._id },
      "secret123",
      { expiresIn: "1d" }
    )

    res.json({ token })

  } catch (error) {

    console.log("LOGIN ERROR:", error)

    res.status(500).json({ message: "Server error" })

  }

}