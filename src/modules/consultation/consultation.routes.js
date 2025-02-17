import { Router } from "express";
import * as consultationCon from "./consultation.controller.js"
const router = Router()

router.post("/create", consultationCon.createConsultation)
router.get("/", consultationCon.getAllConsultation)
// router.get("/:id", consultationCon.getOneConsultation)
router.delete("/:id", consultationCon.deleteConsultation)

router.patch("/markAsCompleted/:id", consultationCon.markAsRead)
router.patch("/markAsCanceled/:id", consultationCon.markAsCanceled)

router.get("/getLastThreeConsultes", consultationCon.getLastThreeConsultes)


router.post("/isRead", consultationCon.isRead)

router.get("/getAllLastOneHour", consultationCon.getAllLastOneHour)

router.get("/getAllUnReadConsultents", consultationCon.getAllUnReadConsultents)

export default router


