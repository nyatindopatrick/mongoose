const router = require("express").Router();
const User = require("../models/users");

router.post("/", (req, res) => {
  const { fname, lname, social, physical, emotional } = req.body;
  const addUser = new User({
    user: {
      fname,
      lname
    },
    properties: {
      habits: { social, physical, emotional }
    }
  });
  console.log(fname);
  addUser
    .save()
    .then(member => {
      res.status(200).json({ member });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/", (req, res) => {
  User.find()
    .then(users => {
      res.status(200).json(
        users.map(user => {
          const person = user.user;
          return `First Name: ${person.fname}, Last Name:${person.lname}`;
        })
      );
    })
    .catch(err => {
      console.log(err);
    });
});
module.exports = router;
