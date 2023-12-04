const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router=require('./routes/router')
const mongoose=require('mongoose')
const cors=require('cors');


// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// ==================================================~

app.use('/', router);



mongoose.connect('mongodb+srv://bijeeshbstackup:bijeesh1999@cluster0.8roueeq.mongodb.net/')
.then(()=>{
    app.listen(2000, () => {
        console.log("Server is running at http://localhost:2000");
    });

}).catch((err)=>{
    console.log(err) 
})
