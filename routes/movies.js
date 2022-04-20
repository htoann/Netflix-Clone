const router = require("express").Router();
const Movie = require("../model/Movie");
const verify = require("../verifyToken");

// Create
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);

    try {
      const savedMovie = await newMovie.save();
      res.json(savedMovie);
    } catch (err) {
      res.json(err);
    }
  } else {
    res.json("You are not allowed!");
  }
});

// Update
router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed!");
  }
});

// Delete
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);

      res.json("The movie has been deleted");
    } catch (err) {
      res.json(err);
    }
  } else {
    res.json("You are not allowed!");
  }
});

// Get
router.get("/find/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movie = await Movie.findById(req.params.id);

      res.json(movie);
    } catch (err) {
      res.json(err);
    }
  } else {
    res.json("You are not allowed!");
  }
});

// Get Random
router.get("/random", verify, async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "movie") {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    } else if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([{ $sample: { size: 1 } }]);
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get
router.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movies = await Movie.find();

      res.json(movies.reverse());
    } catch (err) {
      res.json(err);
    }
  } else {
    res.json("You are not allowed!");
  }
});

module.exports = router;
