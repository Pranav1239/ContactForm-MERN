const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Practice1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(()=>{
    console.log(`DataBase is working properly!`)
})
.catch((err)=>{
    console.log(`ERROR` , err)
});

const ContactSchema = new mongoose.Schema({
    name : String,
    email : String,
    subject : String,
    reason : String
});

const ContactModel = mongoose.model('ContactForms' , ContactSchema)

module.exports = ContactModel;

