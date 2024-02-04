/*
 *  Created blog and services tables in the blogAndServices.db file using the CLI.
 */

const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const databasePath = path.join(__dirname, "blogAndServices.db");

const app = express();

app.use(express.json());

let database = null;

const initializeDbAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });

    app.listen(3004, () =>
      console.log("Server Running at http://localhost:3004/")
    );
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();

app.get("/blog/:blogId/", async (request, response) => {
  const { blogId } = request.params;

  const getBlogQuery = `
    SELECT
      *
    FROM
      blog
    WHERE
      id = ${blogId};`;
  const blog = await database.get(getBlogQuery);
  response.send(blog);
});

app.get("/services/:serviceId/", async (request, response) => {
  const { serviceId } = request.params;

  const getServiceQuery = `
      SELECT
        *
      FROM
        services
      WHERE
        id = ${serviceId};`;
  const service = await database.get(getServiceQuery);
  response.send(service);
});

module.exports = app;
