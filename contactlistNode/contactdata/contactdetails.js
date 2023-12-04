const mongoose=require('mongoose')

const contactSchema=mongoose.Schema({

    firstName:String,
    lastName:String,
    email:String,
    phno:Number

},{
    timestamps:true
})


module.exports=mongoose.model('contacts',contactSchema)