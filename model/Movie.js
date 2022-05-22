const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: "String", required: true, unique: true },
    desc: { type: "String" },
    img: { type: "String" },
    imgSm: { type: "String" },
    trailer: { type: "String" },
    video: { type: "String" },
    limit: { type: "String" },
    genre: { type: "String", lowercase: true },
    year: { type: "String" },
    isSeries: { type: "Boolean", default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
