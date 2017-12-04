//import { concat } from '../../../../Users/sparchuru/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/async';

//import { url } from 'inspector';

var studentModel = require('../models/students.model');
var mongoose = require('mongoose');
var model = mongoose.model('studentdatas');
module.exports = {
     list : (req,res) => {
        
   },
   find :(req,res) =>{
        let sname = req.param('name');
        let email = req.param('email');
        console.log(sname);
        console.log(email);
        //res.json(sname);
         model.findOne({name:sname},(error,data)=>{
             if(error){
                 throw error;
             }
            res.json(data);
         })
   },     
   create:(req,res)=>{
      // var schema = 
       model.insertMany(req.body,(error,students)=>{
        //console.log("name is"+students);
          if(error){
              return res.status(500).json({
                  message:"Error while create student",
                  error:error
              });
          }
          return res.status(201).json(students);
       });
   }

}
