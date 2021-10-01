const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = new Schema({
  namw: {
    type: String,
    required: true,
    trim: true,
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
