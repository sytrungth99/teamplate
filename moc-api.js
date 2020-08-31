var express =require('express');
var mocker =require('connect-api-mocker');
var cors =require('cors');
const port =8000;
var app = express();
app.use(cors());
app.use('/api',mocker('mock-api'));
app.listen(port,() =>console.log(port));