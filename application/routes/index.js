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

router.get('/search', function(req, res) {
  // Extract the search query from the request parameters
  var query = req.query.q;

  // Based on the query, redirect to the appropriate page
  if (query === 'login') {
    res.redirect('/login');
  } else if (query === 'register') {
    res.redirect('/register');
  } else if (query === 'postimage') {
    res.redirect('/postimage');
  } else if (query === 'post') {
    res.redirect('/post');
  } else {
    // Handle other search queries or display a default search page
    res.render('search', { query: query });
  }
});
module.exports = router;