import nodemailer from "nodemailer";

interface Props {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export const sendMail = ({
  from,
  to,
  subject,
  text = undefined,
  html = undefined,
}: Props) => {
  return new Promise((resolve, reject) => {
    const transportConfig = {
      host: process.env.EMAIL_HOST ?? "",
      port: parseInt(process.env.EMAIL_PORT ?? "587"),
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: process.env.EMAIL_USER ?? "",
        pass: process.env.EMAIL_PASS ?? "",
      },
    };

    let mailOptions = {
      from,
      to,
      subject,
      html,
      generateTextFromHTML:true
    };

    let transporter = nodemailer.createTransport(transportConfig);

    // verify connection configuration
    transporter.verify(function (error) {
      if (error) {
        console.error("Email Service", `verify error: ${error}`);
        resolve(false);
      } 
    });

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Email Service", `send error: ${err}`);
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};
