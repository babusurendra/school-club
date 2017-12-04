var express = require('express');
var router = express.Router();
var studentcontorller = require('../controllers/stundent.controller');
router.get('/students',(req,res)=>{
     res.json("success");
});
router.get('/students/:name',studentcontorller.find);
router.post('/students/urlparams?name&email',studentcontorller.find);
router.post('/students',studentcontorller.create);
module.exports = router;