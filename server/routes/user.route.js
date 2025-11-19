const router = require("express").Router();

router.get("/welcome", (req, res) => {
  res.send("Welcome to the User API");
});

module.exports = router;
