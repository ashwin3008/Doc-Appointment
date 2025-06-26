const express = require("express");
const {
  registerController,
  loginController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookeAppointmnetController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/getUserData", authMiddleware, authController);
router.post("/apply-doctor",authMiddleware,applyDoctorController);
router.post("/get-all-notification",authMiddleware,getAllNotificationController);
router.post("/delete-all-notification",authMiddleware,deleteAllNotificationController);
router.get("/getAllDoctors",authMiddleware,getAllDoctorsController);
router.post("/book-appointment",authMiddleware,bookeAppointmnetController);
router.post("/book-availability",authMiddleware,bookingAvailabilityController);
router.get("/user-appointment",authMiddleware,userAppointmentsController);

module.exports = router;
