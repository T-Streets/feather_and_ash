const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const nodemailer = require('nodemailer');
const config = require('./serverConfig/config');
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

const path = __dirname 

app.get('/', (req,res) => {
    res.sendFile(path + '/index.html')
})

/**
 * Handles route on form submit to send message to gmail account
 */
app.post('/api/form', (req, res) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            clientId: config.googleClientID,
            clientSecret: config.googleClientSecret,
        }

    })

    /**
     * Creates message parameter to be sent to gmail
     */
    let mailOptions = {
        from: req.body.firstName,
        to: 'tyler@featherandash.io',
        subject: `New Message from ${req.body.firstName} - ${req.body.email}`,
        text: req.body.message,
        auth: {
            user: 'tyler@featherandash.io',
            refreshToken: config.googleRefreshToken,
            accessToken: config.googleAccessToken
        }
    }


    transporter.sendMail(mailOptions, (err, res) => {
        if(err) {
            console.log(err)
        } else {
            console.log('Email Sent!')
        }
    }) 
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})