import mongoose from "mongoose";
import User from "./userModel";

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
    maxlength: 75,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectID,
    ref: User,
  },
});

const Article = mongoose.model("Article", articleSchema);

export default Article;
