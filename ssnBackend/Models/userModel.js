import mongoose from "mongoose";

/* what kind of the should the user have */
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    dropDups: true,
  },
  number: { type: Number, required: true, unique: true },
  type: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  password: { type: String, required: true },
});

/* creating the collection of the user */
const userModel = mongoose.model("User", userSchema);

export default userModel;
