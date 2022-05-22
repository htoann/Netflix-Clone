const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    title: { type: "String", required: true, unique: true },
    type: { type: "String", lowercase: true },
    genre: { type: "String", lowercase: true },
    content: { type: "Array" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);
