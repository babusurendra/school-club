var app = require('express')();
app.use('/school/api').then(() => {
    
})
app.listen(3000,function(error,success){
    if(error){
        throw error;
    }
    console.log("Server Connected");
});