const { readFileSync } = require("fs");
const path = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Nice!
require("dotenv").config();

// No hace falta especificar index ya que es el archivo por defecto, lo podes dejar de esta forma:
require("./database");

const { resolvers } = require("./resolvers/products");

const PORT = process.env.LOCAL_PORT;

// Nice. Me gusta que lo hayas resuelto a mano
// Tambien, en otros proyectos podes optar por usar algunas librerias como:
// https://www.npmjs.com/package/graphql-import-schema

const schemas = readFileSync(path.join(__dirname, "./schema.graphql"), "utf8");
const schema = buildSchema(`${schemas}`);

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server running is port ${PORT}`);
});
