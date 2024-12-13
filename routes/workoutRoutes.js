const express = require("express");
const userController = require("../controllers/workoutControllers");
const { verify } = require("jsonwebtoken");
const router = express.Router();

router.post('/add-workout', verify, userController.addWorkout);
router.get('/getMyWorkouts',verify,userController.getWorkout);




module.exports = router;