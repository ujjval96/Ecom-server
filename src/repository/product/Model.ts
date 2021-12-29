import mongoose from "mongoose";

const Product = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  rating: {
    type: Number
  }
});

export default mongoose.model("Product", Product)