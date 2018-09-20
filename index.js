const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const nodeMailer = require('nodemailer');
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

app.post('/api/form', (req, res) => {
    console.log(req.body)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})