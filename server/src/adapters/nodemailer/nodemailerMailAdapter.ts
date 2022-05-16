import nodemailer from 'nodemailer';
import { SendMailData, MailAdapter } from  '../mailAdapter'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0bfd796d194a54",
    pass: "0cb71753a2b00f"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData){
  await transport.sendMail({
    from: 'Equipe Puna <oi@puna.com>',
    to: 'Ricardo Vasconcelos <ricardovasconcelos.dev@gmail.com>',
    subject,
    html: body
  })
  }
}