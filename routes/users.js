var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { greeting: "You're so cool" });
});

module.exports = router;
