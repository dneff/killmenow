var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

var os = require('os');
var prettySeconds = require('pretty-seconds');

var since = function () {
    return prettySeconds(Math.ceil(process.uptime()));
};

var hero = function () {

}

/* GET home page. */
router.route('/')
.get(function(req, res, next) {
  res.render('index', { title: 'Kill Me Now!', host: os.hostname(), uptime: since() });
})
.post(urlencodedParser, function(req, res, next) {
  if (!req.body) return res.sendStatus(400);
  if (req.body.status == 'Kill Me Now!') {
    res.status(500).send("I've been clicked! Arrrghhh....");
    process.exit(1);
  } else {
    console.log(req.body.status);
    res.sendStatus(400);
  }
});

module.exports = router;
