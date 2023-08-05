const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const routes = require("./controllers");
const sequelize = require("./config/connections");
app.use(routes);

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("SERVER LISTENING ON PORT 3000....");
  });
});
