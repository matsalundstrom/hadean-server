var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

    res.json({message: 'respond with a resource'});
});

router.delete('/', function (req, res) {

    res.send('delete');
});

router.put('/', function (req, res) {

    res.send('put');
});

router.post('/', function (req, res) {

    res.send('post');
});

module.exports = router;
