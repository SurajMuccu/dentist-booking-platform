import express from "express"
import auth from "../middleware/auth.js"
import { createAppointment, getAppointments } from "../controllers/appointmentController.js"

const router = express.Router()

router.post("/", createAppointment)
router.get("/", auth, getAppointments)

export default router