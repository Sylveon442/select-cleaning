const jwt = require('jsonwebtoken');
var express = require('express');
const dotenv = require('dotenv');
require("dotenv").config();
const { MongoClient } = require("mongodb");
var router = express.Router();


function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

// check valiity of the token
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// login the client
router.put('/', function(req, res, next) {
  const resource = req.body;
  console.log(resource)
  const phone = resource.phone;
  const code = resource.code;
  // this should use a call to validate whether it is valid
  // debug purposes, only 123456 is recognised
  if(code != '123456') {
    res.status(403).send('invalid code');
    return;
  }
  const token = generateAccessToken({
    time: Date.now(),
    phone: phone + Date.now() + 3,
  });
  
  res.send(token);
});

router.post('/', function(req, res, next) {
  const resource = req.body;
  console.log(resource)
  const phone = resource.phone;
  const code = resource.code;
  // this should use a call to validate whether it is valid
  // debug purposes, only 123456 is recognised
  if(code != '123456') {
    res.status(403).send('invalid code');
    return;
  }
  const token = generateAccessToken({
    time: Date.now(),
    phone: phone + Date.now() + 3,
  });
  
  res.send(token);
});

module.exports = router;