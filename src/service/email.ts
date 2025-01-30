import { Form } from '@/types/IContact';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'naver',
  host: 'smtp.naver.com',
  port: 465,
  // secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEmail({ subject, from, message }: Form) {
  const mailData = {
    to: `${process.env.AUTH_USER}@naver.com`,
    subject: `[Portfolio] ${subject}`,
    from,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    <br/><br/>
    <p>보낸 사람 : ${from}</p>
    `,
  };

  return transporter.sendMail(mailData);
};