const express = require('express')
const app = express()
const mongoose = require('mongoose') 
const bodyParser = require('body-parser')
require('dotenv/config')
const Message = require('./models/Message')

app.use(bodyParser.json())

app.post('/message', async (req, res) => {
    const message = new Message({
        from: req.body.from,
        title: req.body.title,
        email: req.body.email,
        message: req.body.message,
    })
    try{
        const savedMessage = await message.save()
        res.json(savedMessage)
    }catch(err){
        res.json({ Error:err })
    }
    
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },
    () => console.log('Connected to MongoDB'))

app.listen(3000)