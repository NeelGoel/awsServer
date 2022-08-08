var express = require('express');
var app = express();
var cors = require('cors');
var user = require('./routes/user');

app.use(express.json({extend:false}));
app.use(cors());
app.use('/', user);

var PORT = process.env.PORT || 8080;

app.listen(PORT, () => { console.log(`server has been started at ${PORT}`)});