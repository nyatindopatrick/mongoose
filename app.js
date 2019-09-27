const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const User = require("./models/users");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
mongoose
  .connect("mongodb://localhost:27017/testapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("database connected sucessfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("This is the home route");
});

app.use("/users", require("./routes/user"));

const port = process.env.port || 3000;

app.listen(port, console.log(`server running on port ${port}`));
