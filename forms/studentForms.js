const mongoose = require('mongoose');

const admissionFormSchema = new mongoose.Schema({
    personalDetails: {
        fullName: {
            lastName: { type: String, required: true, trim: true },
            firstName: { type: String, required: true, trim: true },
            middleName: { type: String, trim: true }
        },
        dateOfBirth: { type: Date, required: true },
        gender: { type: String, enum: ['Male', 'Female'], required: true },
        phoneNumber: { type: String, required: true, match: [/^\d{10,15}$/, 'Please enter a valid phone number'] },
        email: { type: String, required: true, match: [/\S+@\S+\.\S+/, 'Please enter a valid email'] },
        nationality: { type: String, trim: true },
        homeTown: { type: String, trim: true },
        resident: { type: String, trim: true },
        state: { type: String, trim: true },
        country: { type: String, trim: true },
        digitalAddress: { type: String, trim: true },
        idType: { type: String, trim: true },
        idNumber: { type: String, trim: true }
    },
    parent: {
        name: {
            firstName: { type: String, required: true, trim: true },
            middleName: { type: String, trim: true },
            lastName: { type: String, required: true, trim: true },
        },
        phoneNumber: { type: String, required: true, match: [/^\d{10,15}$/, 'Please enter a valid phone number'] },
        relationship: { type: String, required: true, trim: true },
        email: { type: String, required: true, match: [/\S+@\S+\.\S+/, 'Please enter a valid email'] },
        address: { type: String, trim: true },
    },
    sponsor: {
        name: {
            firstName: { type: String, required: true, trim: true },
            middleName: { type: String, trim: true },
            lastName: { type: String, required: true, trim: true },
        },
        phoneNumber: { type: String, required: true, match: [/^\d{10,15}$/, 'Please enter a valid phone number'] },
        email: { type: String, required: true, match: [/\S+@\S+\.\S+/, 'Please enter a valid email'] },
        address: { type: String, trim: true },
    },
    hostel: {
        residentialStudent: { type: String },
        nonResidentialStudent: { type: String },
    },
    
},);

module.exports = mongoose.model('AdmissionForm', admissionFormSchema);