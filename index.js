const { readFileSync } = require("fs");
const path = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

require("dotenv").config();

require("./database/index");
const { resolvers } = require("./resolvers/products");

const PORT = process.env.LOCAL_PORT;

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
