var express = require('express');
var router = express.Router();
var path = require('path');


router.get("/secret", function(req, res, next){
    var file = req.params[0] || 'views/index2.html';
    res.sendFile(path.join(__dirname, "../public", file));
});

router.get("/*", function(req, res, next){
    var file = req.params[0] || 'views/index.html';
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;