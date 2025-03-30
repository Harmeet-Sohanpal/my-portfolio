const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const nodemailer = require("nodemailer");

const app = express()
const port = 4000

app.use(cors({ origin: '*' }));
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 



mongoose.connect('mongodb://localhost:27017/userDetails')
    .then(()=>{
        console.log("DB CONNECTED")
    })
    .catch((err)=>{console.log("DB NOT CONNECTED", err)})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})    

const Users = mongoose.model("Users", userSchema);

app.post('/userdetails', async (req, res) => {
    try {
        const user = new Users({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        await user.save()
        console.log("Data Fetched and Added to the DB")
        res.status(201).json({ message: 'success', user })
    }
    catch (err) {
        console.log("Error Adding Data", err)
        res.status(500).json({ message: 'Error Adding Data', error: err })
    }
})

// endpoint for fetching user details



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
