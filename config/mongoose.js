const mongoose = require('mongoose');
//mongoose.connection.openUri('mongodb://127.0.0.1/camp_v12')
mongoose.connection.openUri('mongodb://127.0.0.1:27017/school-club',(error,success) =>{
    if(error){
        throw error;
    }
    console.log("Connected to DataBase!");
    require('../models/students.model');
    //mongoose.model('studentdata');
});