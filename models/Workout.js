const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    duration: {
        type: String,
        required: [true, 'Duration is required']
    },
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
}); 

module.exports = mongoose.model('Workout', workSchema);
 