var express = require('express');
var router = express.Router();

router.get('/',async (req, res) => {
    const cursor = client
    .db('awsData')
    .collection('userList')
    .find()

  const results = await cursor.toArray();
res.json(results)
})

module.exports = router;