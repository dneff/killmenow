var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

var os = require('os');
var prettySeconds = require('pretty-seconds');

var heroes = require('../images');

var hero_image = heroes.images[Math.floor(Math.random()*heroes.images.length)];

var since = function () {
    return prettySeconds(Math.ceil(process.uptime()));
};

/* GET home page. */
router.route('/')
.get(function(req, res, next) {
  console.log(hero_image);
  res.render('index', { title: 'Kill Me Now!', host: os.hostname(), uptime: since(), killpic: hero_image });
})
.post(urlencodedParser, function(req, res, next) {
  if (!req.body) return res.sendStatus(400);
  if (req.body.status == 'Kill Me Now!') {
    res.render('killed', {uptime: since()});
    process.exit(1);
  } else {
    console.log(req.body.status);
    res.sendStatus(400);
  }
});

module.exports = router;
