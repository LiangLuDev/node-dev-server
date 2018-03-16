const express = require('express');
const router = express.Router();

/* 首页. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

module.exports = router;
