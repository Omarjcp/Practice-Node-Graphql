const mongoose = require("mongoose");

const {
  PRACTICE_MONGODB_HOST,
  PRACTICE_MONGODB_DATABASE,
  USER_MONGODB_DATABASE,
  PASSWORD_MONGODB_DATABASE,
} = process.env;

const mongodbUri = `mongodb+srv://${USER_MONGODB_DATABASE}:${PASSWORD_MONGODB_DATABASE}@${PRACTICE_MONGODB_HOST}/${PRACTICE_MONGODB_DATABASE}`;

mongoose
  .connect(mongodbUri, {})
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));
