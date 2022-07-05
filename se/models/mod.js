import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
