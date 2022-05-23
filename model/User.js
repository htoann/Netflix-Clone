const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: "String", required: true, unique: true },
    email: { type: "String", required: true, unique: true },
    password: { type: "String", required: true },
    avatar: {
      type: "String",
      default:
        "https://ih1.redbubble.net/image.618405117.2432/flat,1000x1000,075,f.u2.jpg",
    },
    isAdmin: { type: "Boolean", default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
