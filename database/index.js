const mongoose = require("mongoose");

const {
  PRACTICE_MONGODB_HOST,
  PRACTICE_MONGODB_DATABASE,
  USER_MONGODB_DATABASE,
  PASSWORD_MONGODB_DATABASE,
} = process.env;

// Esta muy bien! Tambien podes optar por poner toda esta url de mongo dentro de una misma variable de entorno
// Es una opcion simplemente, ambas son correctas

const mongodbUri = `mongodb+srv://${USER_MONGODB_DATABASE}:${PASSWORD_MONGODB_DATABASE}@${PRACTICE_MONGODB_HOST}/${PRACTICE_MONGODB_DATABASE}`;

mongoose
  .connect(mongodbUri, {})
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));
