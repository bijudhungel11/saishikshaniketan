import Post from "../Models/postModel.js";
import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("hello");
  console.log(req.body);
  const post = new Post({
    heading: req.body.heading,
    description: req.body.description,
    image: req.body.imgUrl,
    user: req.body.user,
    time: new Date(),
  });
  const newPost = await post.save();
  if (newPost) {
    return res.status(201).send({
      message: "Post created successfully",
      data: newPost,
    });
  }
  return res.status(500).send({
    message: "Error on creating new Post",
  });
});

router.post("/action", async (req, res) => {
  const isPost = await Post.findOne({});
  if (isPost) {
    res.send({
      likes: req.body.likes,
      comment: req.body.comment,
    });
  } else {
    res.status(401).send({
      msg: "Invalid posts requests",
    });
  }
});
router.get("/getLength", async (req, res) => {
  const posts = await Post.find({});
  const length = posts.length;
  res.send({ length });
});
router.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.send(posts);
});
export default router;
