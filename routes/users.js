var express = require("express");
var router = express.Router();

let globalUsers = [
  { username: "admin", password: "admin" },
  { username: "kai", password: "test" },
  { username: "barak", password: "testt" }
];

/* GET users listing. */
router.get("/login/:username/:password", function(req, res, next) {
  console.log("******");
  console.log(
    "the input fields: " + req.params.username + " : " + req.params.password
  );
  // res.status(200).send(checkValidity(req.params.username, req.params.password));
  answer = checkValidity(req.params.username, req.params.password);
  console.log(answer);
  setTimeout(function() {
    res.send({
      "access granted": checkValidity(req.params.username, req.params.password)
    });
  }, 1000);
  // res.send({
  //   isAproved: checkValidity(req.params.username, req.params.password)
  // });
});

checkValidity = (username, password) => {
  exists = false;
  correctUser = {};
  globalUsers.forEach(user => {
    if (user.username == username && user.password == password) {
      correctUser = user;
      exists = true;
    }
  });
  return exists ? correctUser : exists;
};

module.exports = router;
