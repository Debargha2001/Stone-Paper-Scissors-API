const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const app = express();

app.use('/',require('./routes/index'));

const port = process.env.PORT || 5000;

app.listen(port, (err)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log(`Server is running on port ${port}`);
})