import express from "express";

import Teacher from "../Models/teacherModel.js";
import { isAdmin, isAuth } from "../utils.js";

const router = express.Router();
/* router for updateing the teachers */
router.put("/:id", isAuth, isAdmin, async (req, res) => {
  const teacherId = req.params.id;

  const teacher = await Teacher.findById(teacherId);
  if (teacher) {
    teacher.firstName = req.body.firstName;
    teacher.middleName = req.body.middleName;
    teacher.lastName = req.body.lastName;
    teacher.gmail = req.body.gmail;
    teacher.mbNumber = req.body.mbNumber;
    teacher.gender = req.body.gender;
    teacher.address = req.body.address;
    teacher.calender = req.body.calender;
    teacher.education = req.body.education;
    teacher.teacherId = req.body.teacherId;
    teacher.classList = req.body.classList;
    teacher.subject = req.body.subject;
    teacher.experience = req.body.experience;
    teacher.degree = req.body.degree;
    teacher.college = req.body.college;
    teacher.faculty = req.body.faculty;

    const updatedTeacher = await teacher.save();
    if (updatedTeacher) {
      return res.status(200).send({
        message: "Successfully teacher updated",
        data: updatedTeacher,
      });
    }
    return res.status(500).send({
      message: "Error on updating the teacher",
    });
  }
});
/* end */

/* router for getting the all teachers */
router.get("/", async (req, res) => {
  const teachers = await Teacher.find({});
  res.send(teachers);
});
/* end */

/* for getting the lenght of the user */
router.get("/length", async (req, res) => {
  const teachers = await Teacher.find({});

  const length = teachers.length;
  res.send({ length });
});
/* end */

/* router for post */
router.post("/", isAuth, isAdmin, async (req, res) => {
  const teacher = new Teacher({
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    gmail: req.body.gmail,
    mbNumber: req.body.mbNumber,
    gender: req.body.gender,
    address: req.body.address,
    calender: req.body.calender,
    education: req.body.education,
    teacherId: req.body.teacherId,
    classList: req.body.classList,
    subject: req.body.subject,
    experience: req.body.experience,
    degree: req.body.degree,
    college: req.body.college,
    faculty: req.body.faculty,
  });
  const newTeacher = await teacher.save();

  if (newTeacher) {
    return res.status(201).send({
      message: "Teacher created Successfully",
      data: newTeacher,
    });
  }
  return res.status(500).send({
    message: "Error on creating new Teacher",
  });
});
/* end */

/* router for getting the single teacher */
router.get("/teacher/:id", async (req, res) => {
  const id = req.params.id;

  const teacher = await Teacher.find({
    _id: id,
  });
  res.send(teacher);
});
/*  end */

/* delete */
router.delete("/teacher/:id", async (req, res) => {
  const id = req.params.id;
  const deleteTeacher = await Teacher.findById(id);
  if (deleteTeacher) {
    await deleteTeacher.remove();
    res.send({
      message: "Teacher Is Deleted Successfully",
    });
  } else {
    res.send({ message: "Error on Deleting Teacher" });
  }
});

/* for getting the teacher who teaches at selected classes */
router.get("/classList/:class", async (req, res) => {
  const classValue = req.params.class;

  const teachers = await Teacher.find({}, (err, teachers) => {
    if (err) {
      res.status(404).send({ message: "can't get the data" });
    }
    const value = teachers.filter((teacher) => {
      return teacher.classList.indexOf(classValue) >= 0;
    });

    res.send(value);
  });
});
export default router;
