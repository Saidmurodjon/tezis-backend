const mongoose = require('mongoose')
const teacherSchema = mongoose.Schema({
    name:String,
    lastName:String,
    tel:String,
    email:String,
    kafedra:{
        name:String,
        kafedraId:String,
    },
    login:String,
    password: String,
    date:Date,
    // imagePath: {
    //     type: String,
    //     trim: true,
      
    // },
    role:{
        type:String,
        default:"teacher"
    }
    
})
const TeacherModel = mongoose.model('TeacherModel', teacherSchema)
module.exports = TeacherModel