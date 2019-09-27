const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: {
    fname: { type: String, required: true },
    lname: { type: String, required: true }
  },
  properties: {
    habits: { social: String, physical: String, emotional: String }
  }
});

module.exports = mongoose.model("User", userSchema);
