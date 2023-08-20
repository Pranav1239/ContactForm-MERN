const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ContactModel = require('./databases/contactdb');
const PORT = 4040;

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.post('/contact' , async (req , res)=>{
    const ContactProfile = new ContactModel();
    ContactProfile.name = req.body.name;
    ContactProfile.email = req.body.email;
    ContactProfile.subject = req.body.subject;
    ContactProfile.reason = req.body.reason;
    const ContactDoc = await ContactProfile.save()
    console.log(ContactDoc);
    res.json(ContactDoc)
});

server.listen(PORT , ()=>{
    console.log(`server is running on ${PORT}`)
});