import express from "express";
import Student from "../Models/studentModel.js";
import { isAdmin, isAuth } from "../utils.js";

const router = express.Router();
router.patch("/:id", isAuth, isAdmin, async (req, res) => {
  const studentId = req.params.id;
  console.log(studentId);
  const student = await Student.findById(studentId);
  if (student) {
    student.firstName = req.body.firstName;
    student.middleName = req.body.middleName;
    student.lastName = req.body.lastName;
    student.gmail = req.body.gmail;
    student.mbNumber = req.body.mbNumber;
    student.studentId = req.body.studentId;
    student.address = req.body.address;
    student.calender = req.body.calender;
    student.classValue = req.body.classValue;
    student.gender = req.body.gender;
    student.fatherName = req.body.fatherName;
    student.fatherOccupation = req.body.fatherOccupation;
    student.fatherNumber = req.body.fatherNumber;
    student.fatherGmail = req.body.fatherGmail;
    student.fatherOfficeName = req.body.fatherOfficeName;
    student.motherName = req.body.motherName;
    student.motherOccupation = req.body.motherOccupation;
    student.motherGmail = req.body.motherGmail;
    student.motherNumber = req.body.motherNumber;
    student.motherOfficeName = req.body.motherOfficeName;
    const updatedStudent = await student.save();
    if (updatedStudent) {
      return res.status(200).send({
        message: "Succesfully student updated",
        data: updatedStudent,
      });
    }
    return res.status(500).send({
      message: "Error on updating the student",
    });
  }
});
/* for getting the student */
router.get("/", async (req, res) => {
  /* it will give the list of the student */

  const students = await Student.find({});
  //sending the  students list to the ui
  res.send(students);
});

router.get("/length", async (req, res) => {
  const studentLength = await Student.find({}, (err, students) => {
    if (err) {
      res.sendStatus(404).send({
        message: "Data Not found",
      });
    }

    const length = students.length;
    res.send({ length });
  });
});

/* it is the route for only making the request for list of the student for the particular class */
router.get("/:class", async (req, res) => {
  const studentClass = req.params.class;
  const students = await Student.find({
    classValue: studentClass,
  });
  res.send(students);
});

/*for getting the student by their id (route) */
router.get("/student/:id", async (req, res) => {
  const id = req.params.id;

  const students = await Student.find({
    _id: id,
  });

  res.send(students);
});
/* end of student route*/

/* for posting the student to the student list of the database */
router.post("/", isAuth, isAdmin, async (req, res) => {
  const student = new Student({
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    gmail: req.body.gmail,
    mbNumber: req.body.mbNumber,
    studentId: req.body.studentId,
    address: req.body.address,
    calender: req.body.calender,
    classValue: req.body.classValue,
    gender: req.body.gender,
    fatherName: req.body.fatherName,
    fatherOccupation: req.body.fatherOccupation,
    fatherNumber: req.body.fatherNumber,
    fatherGmail: req.body.fatherGmail,
    fatherOfficeName: req.body.fatherOfficeName,
    motherName: req.body.motherName,
    motherOccupation: req.body.motherOccupation,
    motherGmail: req.body.motherGmail,
    motherNumber: req.body.motherNumber,
    motherOfficeName: req.body.motherOfficeName,
  });

  const newStudent = await student.save();
  if (newStudent) {
    return res.status(201).send({
      message: "Student Created Successfully",
      data: newStudent,
    });
  }

  return res.status(500).send({
    message: "Error in creating new Student",
  });
});

router.delete("/:id", isAuth, isAdmin, async (req, res) => {
  const studentId = req.params.id;

  const deletedStudent = await Student.findById(studentId);
  if (deletedStudent) {
    await deletedStudent.remove();
    res.send({ message: "Student Deleted" });
  } else {
    res.send("Error on deleting student");
  }
});

/* for getting the student length */

export default router;
