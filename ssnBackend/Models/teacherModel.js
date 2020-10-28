import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
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
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  calender: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  teacherId: {
    type: String,
    required: true,
    unique: true,
  },
  classList: {
    type: Array,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  faculty: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
});

const teacherModel = mongoose.model("Teacher", teacherSchema);

export default teacherModel;
