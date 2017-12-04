require('./config/mongoose');
var app = require('express')();
const env = require('./config/env');
var morgan = require('morgan');
var bodyParser = require('body-parser');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//const student = require('./controllers/stundent.controller');
const student = require('./routes/student.router');
app.param('name', function(req, res, next, name) {
    
        // check if the user with that name exists
        // do some validations
        // add -dude to the name
        var modified = name + '-dude';
    
        // save name to the request
        req.name = modified;
    
        next();
    });
app.use('/school/api',student);
// app.get('/student',(req,res)=>{
//     res.json("in /student");
// })
app.listen(env.port.dev,function(error,success){
    if(error){
        throw error;
    }
    console.log("Server Connected");
});