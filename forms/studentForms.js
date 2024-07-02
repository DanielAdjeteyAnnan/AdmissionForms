const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    address: String,
    phone: String,
    dateOfBirth: Date, 
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },

    // Add other necessary fields
});

module.exports = mongoose.model('Student', studentSchema);