import express from "express"
import cors from "cors"
import adminRoutes from "./routes/adminRoutes.js"
import connectDB from "./config/db.js"
import dentistRoutes from "./routes/dentistRoutes.js"
import appointmentRoutes from "./routes/appointmentRoutes.js"

const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use("/api/admin", adminRoutes)

app.use("/api/dentists", dentistRoutes)
app.use("/api/appointments", appointmentRoutes)

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})