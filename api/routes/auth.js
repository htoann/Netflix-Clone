const router = require("express").Router();
const User = require("../model/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });

  let user = await User.findOne({ email: newUser.email });
  if (!user) {
    user = await User.findOne({ username: newUser.username });
    if (!user) {
      try {
        const user = await newUser.save();
        res.status(201).json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      return res.status(422).json("Username is already registered");
    }
  } else {
    return res.status(422).json("Email is already registered");
  }
});

// Login
router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json("Wrong email, please try again!");
    } else {
      const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
      if (originalPassword !== req.body.password) {
        return res.status(401).json("Wrong password, please try again!");
      } else {
        const accessToken = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.SECRET_KEY,
          { expiresIn: "30d" }
        );
        const { password, ...info } = user._doc;
        return res.status(200).json({ ...info, accessToken });
      }
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
