const express = require('express')
const mongoose = require('mongoose')
const app = express();
const urldb = 'mongodb+srv://IzzeldeenAlSadeq:Thunderp_45@cluster0.sxzcxtt.mongodb.net/?retryWrites=true&w=majority'
mangoose.connet(dbURL).then(()   => {
    console.log("connected to the cloud")
}).catch((error)  => { console.log(error) })

const port = 65000

const User = new mongoose.Schema({
    name: {type:String, required :true},
    email: {type:String, required :true},
    birthdate:{type:Date, required :true},
    password:{type:String, required :true}
})
User.deleteOne({'this.name':'jack'}).then(()   => {
    console.log("Unidentifined")
})

User.update({'score':9, 'score':10}).then(()   => {
    console.log("Changed")
})

User.find({'score':10}).then(()   => {
    console.log("Found")
})


module.exports = mongoose.model('Score', ScoresSchema)

app.listen(port, () => {
console.log("app is listening right now",port)
})
