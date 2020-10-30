import Post from "../Models/postModel.js";
import express from "express";
const router = express.Router();

router.get("/post/:id", async (req, res) => {
  const postId = req.params.id;
  const post = await Post.findById(postId);
  /* .then((post) => res.send(post))
    .catch((err) => res.send(err)); */

  if (post) {
    return res.send(post);
  } else {
    return res.send({
      message: "Error on getting the post",
    });
  }
});
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

router.get("/getLength", async (req, res) => {
  const posts = await Post.find({});
  const length = posts.length;
  res.send({ length });
});
router.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.send(posts);
});

router.post("/comments", async (req, res) => {
  const postId = req.body.id;
  console.log("this is the value from the post comment", postId);
  const isPost = await Post.findById(postId);

  if (isPost) {
    isPost.comments.push({
      name: req.body.name,
      comment: req.body.comment,
      timestamps: new Date(),
    });

    const updatedPost = await isPost.save();
    if (updatedPost) {
      res.send({
        message: "Successfully comments added",
        data: updatedPost.comments,
      });
    } else {
      res.send({
        message: "Error on getting the comments",
      });
    }
  } else {
    res.status(401).send({
      msg: "Invalid posts requests",
    });
  }
});

router.get("/comments/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    res.send(post.comments);
  } else {
    res.send({
      message: "Error on getting the comments",
    });
  }
});
export default router;
