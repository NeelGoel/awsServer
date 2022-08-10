var express = require('express');
var app = express();
var cors = require('cors');
var user = require('./routes/user');
var userData = require('./routes/userData');
const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient;
const url = `mongodb+srv://awsmongodb:dtOjT6et8wmvv7mW@cluster0.45ypwzg.mongodb.net/?retryWrites=true&w=majority`;
global.client = new MongoClient(url, { useNewUrlParser: true });
client.connect((err) => {
    if (!err) {
        console.log('database has been connected');
    } else {
        console.log('database not connected');
    }
    const newDB = client.db("awsData");
    newDB.listCollections({name: "userList"})
    .next(function(err, collinfo) {
        if (collinfo) {
            console.log('collection exist');
        } else {
            console.log('collection not exist');
            newDB.createCollection("userList");
        }
    });
});

app.use(express.json({ extend: false }));
app.use(cors());
app.use('/', user);
app.use('/userdata', userData);

var PORT = process.env.PORT || 8080;

app.listen(PORT, () => { console.log(`server has been started at ${PORT}`) });