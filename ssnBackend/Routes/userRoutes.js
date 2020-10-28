import User from "../Models/userModel.js";
import express from "express";
import { getToken, isAuth } from "../utils.js";
import Student from "../Models/studentModel.js";
import Teacher from "../Models/teacherModel.js";
import bcrypt from "bcryptjs";
/* creating the router in the backend */
const router = express.Router();

router.get("/createadmin", async (req, res) => {
  try {
    const user = new User({
      name: "Biju Khatri Dhungel",
      type: "admin",
      email: "bijudhungel1111@gmail.com",
      number: 9843716587,
      isAdmin: true,
      password: "biju1111",
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({
      msg: error.message,
    });
  }
  /* to save the admin */
});

/* to create the and the check the user is in the database or not */
router.post("/signin", async (req, res) => {
  /* see that the user which is sending the data is available in the database or not */

  User.findOne({
    email: req.body.email,
    number: req.body.number,
  }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).send({
        error: "Invalid email or number",
      });
    }
    if (savedUser.password === 60) {
      bcrypt.compare(req.body.password, savedUser.password).then((doMatch) => {
        if (doMatch) {
          console.log(savedUser.password, savedUser.password.length);
          res.send({
            _id: savedUser.id,
            name: savedUser.name,
            email: savedUser.email,
            isAdmin: savedUser.isAdmin,
            type: savedUser.type,
            token: getToken(savedUser),
          });
        } else {
          res.status(401).send({
            msg: "Invalid Email or Password",
          });
        }
      });
    } else {
      res.send({
        _id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email,
        isAdmin: savedUser.isAdmin,
        type: savedUser.type,
        token: getToken(savedUser),
      });
    }
  });

  /* if user is available then */
});

/* router for creating the new use if the that particular person is in the database */
router.post("/register", async (req, res) => {
  /* console.log(req.body.userType);
  console.log("email", req.body.email, "number"); */

  const { email, number, password } = req.body;
  if (req.body.userType === "student") {
    const registerUser = await Student.findOne({
      gmail: email,
      mbNumber: number,
    });

    if (registerUser) {
      User.findOne({ email: email }).then((registerUser) => {
        if (registerUser) {
          return res.status(422).send({
            error: "Already have an account",
          });
        }
        bcrypt.hash(password, 12).then((hashedpassword) => {
          const user = new User({
            name: req.body.name,
            email: email,
            type: req.body.userType,
            number: number,
            password: hashedpassword,
          });
          const newUser = user.save();
          if (newUser) {
            res.send({
              _id: newUser.id,
              name: newUser.name,
              email: newUser.email,
              type: newUser.userType,
              isAdmin: newUser.isAdmin,
              number: newUser.number,
            });
          } else {
            res.status(404).send({ msg: "Invalid Student Data" });
          }
        });
      });

      /* if the new user have been save then */
    }
  } else if (req.body.userType === "teacher") {
    const registerUser = await Teacher.findOne({
      gmail: req.body.email,
      mbNumber: req.body.number,
    });

    if (registerUser) {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        type: req.body.userType,
        number: req.body.number,
        password: req.body.password,
      });
      const newUser = await user.save();

      /* if the new user have been save then */
      if (newUser) {
        res.send({
          _id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          type: newUser.userType,
          isAdmin: newUser.isAdmin,
          number: newUser.number,
        });
      } else {
        res.status(404).send({ msg: "Invalid Student Data" });
      }
    }
  } else {
    return res.status(404).send({ msg: "Cannot create your account" });
  }
});

/* router for getting the list of the user */

router.get("/", async (req, res) => {
  const users = await User.find({});

  res.send(users);
});

/* for getting the  user length */
router.get("/length", async (req, res) => {
  const users = await User.find({});
  const length = users.length;
  res.send({ length });
});
export default router;
