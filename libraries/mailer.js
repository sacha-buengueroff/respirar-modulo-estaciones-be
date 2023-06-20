import config from '../config.js'
import nodemailer from 'nodemailer'
import { mailHtml, mailRefusalHtml } from './mailContent.js';
class Mailer {
    static transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.MAIL,
            pass: config.MAIL_PASS
        }
    })
    static async sendMail(email, idDevice) {
        var mailOptions = {
            from: "tripitconsultora@gmail.com",
            to: email,
            subject: "Instrucciones de conexión a RespirAR",
            html: mailHtml(idDevice)
        }
        return await Mailer.transporter.sendMail(mailOptions)
    }
    static async sendRefusalMail(email) {
        var mailOptions = {
            from: "tripitconsultora@gmail.com",
            to: email,
            subject: "Lamentablemente tu solicitud fue rechazada",
            html: mailRefusalHtml()
        }
        return await Mailer.transporter.sendMail(mailOptions)
    }
}
export default Mailer