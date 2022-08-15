const express = require("express");
const router = express.Router();
const LoginData = require("../Models/loginData");

router.get("/", (req, res) => {
    LoginData.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
    LoginData.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.get("/getByUsername/:username", (req, res) => {
    LoginData.findOne({ username: req.params.username })
    .then((result) => {
      if (result === null) {
        console.log("data is empty")
        res.sendStatus(404);
      } else {
       res.setHeader("Access-Control-Allow-Origin", "*");
        res.send(result);
      }
    })
    .catch((err) => {
      res.sendStatus(404);
    });
});

router.post("/", (req, res) => {
  const loginData = new LoginData({
    username: req.body.username,
    password: req.body.password
  });

  loginData
    .save()
    .then((result) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      // res.setHeader('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
      res.send(result);
    })
    .catch((err) => console.log(err));
});

// router.put("/:id", (req, res) => {
//   var query = { _id: req.params.id };
//   var newValues = {
//     $set: {
//       name: req.body.name,
//       age: req.body.age,
//       profession: req.body.profession,
//     },
//   };

//   User.updateOne(query, newValues)
//     .then((result) => {
//       console.log(result);
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

module.exports = router;