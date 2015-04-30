var express = require('express');
var router = express.Router();
var prettySeconds = require('pretty-seconds');

var since = function () {
    return prettySeconds(Math.ceil(process.uptime()));
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kill Me Now!', uptime: since() });
});

module.exports = router;
