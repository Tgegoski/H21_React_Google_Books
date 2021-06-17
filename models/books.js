const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  date: {
    type: Date,
  }

});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;
