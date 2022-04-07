const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: "String", required: true, unique: true },
    desc: { type: "String" },
    img: { type: "String" },
    imgTitle: { type: "String" },
    imgSm: { type: "String" },
    trailer: { type: "String" },
    video: { type: "String" },
    limit: { type: "String" },
    genre: { type: "String" },
    year: { type: "Number" },
    isSeries: { type: "Boolean", default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
