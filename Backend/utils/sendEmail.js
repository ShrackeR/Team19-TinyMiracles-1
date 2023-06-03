const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'montana.harber94@ethereal.email',
        pass: 'hcvcsdTpqmGA69aKzQ'
    }
});
let sendEmail = (emailTemplate) => {
    console.log(emailTemplate)
    transporter.sendMail(emailTemplate, (err, info) => {
        if(err) {
            console.log(err)
        }else{
            console.log('Email sent: ', info.response)
        }
    })
}

module.exports = {sendEmail};