import express from "express"
import { getDentists, addDentist } from "../controllers/dentistController.js"

const router = express.Router()

router.get("/", getDentists)
router.post("/", addDentist)

export default router