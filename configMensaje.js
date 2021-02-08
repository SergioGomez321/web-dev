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
    console.log(formulario.nombre + " - " + formulario.email)
    const mailOptions = {
        from: `${formulario.nombre} <${process.env.email}>`,
        to: `${process.env.email}, ${process.env.email2}`, 
        subject: formulario.asunto,
        html: 
        `<strong>Nombre:</strong> ${formulario.nombre} <br/>
        <strong>E-mail:</strong> ${formulario.email} <br/>
        <strong>Mensaje:</strong> ${formulario.mensaje}`
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}