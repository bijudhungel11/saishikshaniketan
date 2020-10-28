import mongoose from "mongoose";
const commentsSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const postSchema = mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
  },
  user: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  comments: [commentsSchema],
});

const postModel = mongoose.model("Post", postSchema);
export default postModel;
