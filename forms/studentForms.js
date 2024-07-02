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
        residentialStudent: { type: Boolean, default: false }, 
        nonResidentialStudent: { type: Boolean, default: false }, 
    },
    additionalInformation: {
        hasDisability: { type: Boolean, required: true },
        disabilityDetails: { 
          type: String,
          required: function() { return this.hasDisability; } // Only required if hasDisability is true
        },

        dismisalRecord:{type: Boolean, required: true },
        dismissalDetails: {
            institutionName: { type: String },
            country: { type: String },
            year: { type: Number },
            reason: { type: String }
          },

    },
    educationalBackground: {
        highSchoolAttended: {
            schoolName: { type: String },
            program: { type: String },
            period: { type: String },
        },
        collegeAttended: {
            schoolName: { type: String },
            program: { type: String },
            period: { type: String },
        },
    },
    endorsement: {
        name: { type: String },
        signature: { type: String, trim: true },
        address: { type: String, trim: true },
        contact: { type: String, required: true, match: [/^\d{10,15}$/, 'Please enter a valid phone number'] },
        date: { type: Date, required: true  },
    },
    signatureOfApplicant: {
        signature: { type: String, trim: true },
        date: { type: Date, required: true },
    },
    sessionOfChoice: {
        regular: { type: Boolean, default: false }, 
        evening: { type: Boolean, default: false }, 
        weekend: { type: Boolean, default: false }, 
    },
    programDetails: {
        shortCertificateCourse: {
        iC3DigitalLiteracy: { type: Boolean, default: false },
        microsoftOfficeSpecialist: { type: Boolean, default: false },
        practicalHardwareEngineering: { type: Boolean, default: false },
        practicalComputerNetworking: { type: Boolean, default: false },
        practicalGraphicDesign: { type: Boolean, default: false },
        websiteDevelopment: { type: Boolean, default: false },
        animationAndMultimedia: { type: Boolean, default: false },
        pythonProgramming: { type: Boolean, default: false },
        htmlCssAndJavaScript: { type: Boolean, default: false },
        certificateInSoftwareDevelopment: { type: Boolean, default: false },
        certificateInDatabaseDevelopment: { type: Boolean, default: false },
    },
    professionalDiplomaCourse: {
        SystemEngineering: {
            sixMonths: { type: Boolean, default: false },
            oneYear: { type: Boolean, default: false },
        },
        SoftwareEngineering: {
            sixMonths: { type: Boolean, default: false },
            oneYear: { type: Boolean, default: false },
            //twoYears: { type: Boolean, default: false },
        },
        GraphicsAndWebDesign: {
            sixMonths: { type: Boolean, default: false },
            oneYear: { type: Boolean, default: false },
            //twoYears: { type: Boolean, default: false },
        },
        DatabaseManagement: {
            sixMonths: { type: Boolean, default: false },
            oneYear: { type: Boolean, default: false },
            //twoYears: { type: Boolean, default: false },
        },
    },
    externalAcademicCertificationCourse: {
        diplomaInInformationTechnology: {
            sixMonths: { type: Boolean, default: false },
            oneYear: { type: Boolean, default: false },
            //twoYears: { type: Boolean, default: false },
        },
        diplomaInOfficeManagement: {
            sixMonths: { type: Boolean, default: false },
            oneYear: { type: Boolean, default: false },
            //twoYears: { type: Boolean, default: false },
        },
        diplomaInBusinessAdministration: {
            sixMonths: { type: Boolean, default: false },
            oneYear: { type: Boolean, default: false },
            //twoYears: { type: Boolean, default: false },
        },
        diplomaInAccounting: {
            sixMonths: { type: Boolean, default: false },
            oneYear: { type: Boolean, default: false },
            //twoYears: { type: Boolean, default: false },
        },
        
      
    },
    forOfficialUseOnly: {

    }
    






},
});

module.exports = mongoose.model('AdmissionForm', admissionFormSchema);
