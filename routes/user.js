var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('AWS server');
})

module.exports = router;