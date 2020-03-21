const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {

    },
    email : {
        type: String,
        trim: true,
        unique: 1
    },
    password : {

    },
    lastname: {
        
    }





    
})