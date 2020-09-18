const express = require('express');
const router = express.Router();
const path = require('path');

/* Roots */
const root = path.join(__dirname + '/../');
const webappDir = path.join(__dirname + "/../public/");

/* GET home page. */
router.get('/', function (req, res, next) {

  res.sendFile(path.join(webappDir, 'index.html'));
});

module.exports = router;
