var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:icao_code', function(req, res, next) {
  res.send(req.params.icao_code);
});

module.exports = router;
