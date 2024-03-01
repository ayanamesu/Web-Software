var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web-Software', name:" Wing Lee" });
});

router.get("/login", function(req, res) {
  res.render('login');
});

router.get("/register", function(req, res) {
  res.render('registration', {js: ["registration.js"]});
});

router.get("/postimage", function(req, res) {
  res.render('postimage');
});

router.get("/post", function(req, res) {
  res.render('viewpost', {js: ["viewpost.js"]});
});

router.get("/portfolio", function(req, res) {
  res.render('portfolio', {js: ["portfolio.js"]});
});
router.get("/about", function(req, res) {
  res.render('about', {js: ["about.js"]});
});
module.exports = router;