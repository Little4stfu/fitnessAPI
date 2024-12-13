// [section] Depedencies and moduls
const express = require("express");
const mongoose = require("mongoose");

//[SECTION] Environment Setup
const port = 4000;

//[SECTION] Server Setup
const app = express();

const workoutRoutes = require("./routes/workoutRoutes");
const userRoutes =  require("./routes/userRoutes");

//[SECTION] Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// [SECTION] Database Setup
mongoose.connect("mongodb+srv://admin:admin@b458.kzslp.mongodb.net/fitness?retryWrites=true&w=majority&appName=B458");


app.use("/workouts", workoutRoutes);
app.use("/users", userRoutes);

if(require.main === module){
    app.listen(process.env.PORT || 4000, () => {
        console.log(`API is now online on port ${ process.env.PORT || 4000 }`)
    });
}

module.exports = {app,mongoose};