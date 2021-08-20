const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for the exercise"
    },
    type: {
        type: String,
        trim: true,
        required: "Enter the type of exercise"
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
        type: Number
    }
    
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;