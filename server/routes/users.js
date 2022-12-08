var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.put('/', function(req, res, next) {
  let resource = req.query;
  let phone = resource.phone;
  let code = resource.code;
  // this should use a call to validate whether it is valid
  // debug purposes, only 123456 is recognised
  if(code != '123456') {
    res.status(403).send('invalid code');
    return;
  }
  res.send('respond with a resource');
});

module.exports = router;