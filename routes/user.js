var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
res.send('AWS server');        
})

module.exports = router;