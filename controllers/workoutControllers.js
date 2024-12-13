const bcrypt = require('bcrypt');
const Work = require("../models/Workout.js")
const auth = require("../auth.js");

module.exports.addWorkout = async (req, res) => {
    try {
        const { userId, name, duration, status } = req.body;

        // Validation for required fields
        if (!userId || !name || !duration) {
            return res.status(400).json({ message: 'All fields are required (userId, name, duration).' });
        }

        // Create a new workout
        const newWorkout = new Work({
            userId,
            name,
            duration,
            status: status || 'pending'
        });


        const savedWorkout = await newWorkout.save();

        res.status(201).json(
            savedWorkout
        );
    } catch (error) {
        console.error('Error adding workout:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

module.exports.getWorkout = async (req, res) => {
    try {
        const userId = req.user.id; // Extracted from verify middleware


        const workouts = await Workout.find({ userId });

        if (!workouts.length) {
            return res.status(404).json({ success: false, message: 'No workouts found for this user.' });
        }

        res.status(200).json({ success: true, workouts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};
