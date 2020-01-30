const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pinlac.johncarlo@gmail.com',
        subject: 'Thank You For Signing Up',
        text: `Welcome to the app, ${name}. `
    })
}


const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pinlac.johncarlo@gmail.com',
        subject: 'We Are Sad To See You Go ',
        text: `Goodbye, ${name}. We hope to see you again.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}