import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  gmail: {
    type: String,
    required: true,
    unique: true,
  },
  mbNumber: {
    type: Number,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  calender: {
    type: String,
    required: true,
  },
  classValue: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherNumber: {
    type: Number,
    required: true,
  },
  fatherGmail: {
    type: String,
  },
  fatherOfficeName: {
    type: String,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
  },
  motherGmail: {
    type: String,
  },
  motherNumber: {
    type: Number,
  },
  motherOfficename: {
    type: String,
  },
});

const studentModel = mongoose.model("Student", studentSchema);

export default studentModel;
