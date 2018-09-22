const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const nodemailer = require('nodemailer');
const config = require('./serverConfig/config');
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

app.post('/api/form', (req, res) => {
    let transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: ,
            clientId: ,
            clientSecret: ,
            refreshToken: ,
            accessToken: ,
        }

    })

    let mailOptions = {
        from: `${req.body.firstName}`,
        to: `${config.email}`,
        subject: 'new message',
        text: `${req.body.message}`
    }

    transport.sendMail(mailOptions, (err, res) => {
        if(err) {
            console.log(err)
        }
        console.log('Email Sent!')
    }) 
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})