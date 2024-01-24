import mongoose from "mongoose";

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
});

const Article = mongoose.model("Article", articleSchema);

export default Article;
