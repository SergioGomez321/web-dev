const nodemailer = require('nodemailer');

module.exports = (formulario) => {

    let transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
        user: process.env.email, 
        pass: process.env.password 
        }
    });
    console.log("este es el formulario");
    console.log(formulario.name + " - " + formulario.email)
    const mailOptions = {
        from: `${formulario.name} <${process.env.email}>`,
        to: `${process.env.email}, ${process.env.email2}`, 
        subject: formulario.subject,
        html: 
        `<strong>Name:</strong> ${formulario.name} 
        <br/>
        <strong>Email:</strong> ${formulario.email} 
        <br/>
        <strong>Message:</strong> ${formulario.message}`
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}