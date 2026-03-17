import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dentistRoutes from "./routes/dentistRoutes.js"
import appointmentRoutes from "./routes/appointmentRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import connectDB from "./config/db.js"

const app = express()

// ✅ CORS FIX
app.use(cors({
  origin: "*",   // allow all (for now)
}))

app.use(express.json())

// routes
app.use("/api/dentists", dentistRoutes)
app.use("/api/appointments", appointmentRoutes)
app.use("/api/admin", adminRoutes)

// connect DB
connectDB()

app.listen(5000, () => {
  console.log("Server running on port 5000")
})