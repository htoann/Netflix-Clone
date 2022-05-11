const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: "String", required: true, unique: true },
    email: { type: "String", required: true, unique: true },
    password: { type: "String", required: true },
    profilePic: {
      type: "String",
      default:
        "https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFM5PrJX0TiFgfm4HOoS76PWmofnZtjwSQQj-dPSEdzfCr8p8wNhjBwMybzmLIAGotByD810aYhO6nG8N8FMUoXG-sg.png?r=abe",
    },
    isAdmin: { type: "Boolean", default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
