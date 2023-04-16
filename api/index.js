const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const cors = require("cors");
const path = require("path");

dotenv.config();

function generateMongoUrlFromEnv(env) {
  const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = env;
  const url = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
  return url;
}


mongoose
  .connect(generateMongoUrlFromEnv(process.env))
  .then(() => console.log("DB connection success..."))
  .catch((err) => console.log(err));

app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true, // Access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

// Deloy Heroku

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.send({data: "ok", env: process.env})
});

app.listen(process.env.PORT || 8800, () => {
  console.log("Backend server is running...");
});
