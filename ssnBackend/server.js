import express from "express";
import dotenv from "dotenv";
import config from "./config.js";
import mongoose from "mongoose";
import userRouter from "../ssnBackend/Routes/userRoutes.js";
import studentRoute from "../ssnBackend/Routes/studentRoutes.js";
import bodyParser from "body-parser";
import teacherRoutes from "./Routes/teacherRoutes.js";
import postRoutes from "./Routes/postRoutes.js";
import uploadRouter from "./Routes/uploadsRoutes.js";
/* setting the connection of the mongodb and the backend*/
dotenv.config();
//maaA33fU6f8CaKUa
const mongodburl = config.MONGODB_URL;
mongoose
  .connect(mongodburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

/* mongodb connection ends */
const app = express();
app.use(bodyParser.json());
app.use("/api/ssnposts", postRoutes);
app.use("/api/uploads", uploadRouter);
app.use("/api/users", userRouter);
app.use("/api/students", studentRoute);
app.use("/api/teachers", teacherRoutes);
/* to get the images from the frontend */
app.use("/uploads", express.static("uploads"));
/* for creating the local storage in the  backend */

app.listen(5000, () => {
  console.log("server started at http:localhost:5000");
});
