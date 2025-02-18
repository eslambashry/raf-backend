import nodemailer from 'nodemailer'

// export async function sendEmailService({
//   to,
//   subject,
//   message,
//   attachments = [],
// } = {}) {
//   // configurations
//   const transporter = nodemailer.createTransport({
//     host: 'localhost', // stmp.gmail.com
//     port: 587, // 587 , 465
//     secure: false, // false , true
//     service: 'gmail', // optional
//     auth: {
//       // credentials
//       user: 'eslamhussin600@gmail.com',
//       pass: 'rkew ivbu xytk cvng',
//     },
//   })

//   const emailInfo = await transporter.sendMail({
//     from: '"3amo samy 👻" <eslamhussin600@gmail.com>',
//     to: to ? to : '',
//     subject: subject ? subject : 'Hello',
//     html: message ? message : '',
//     attachments,
//   })
//   if (emailInfo.accepted.length) {
//     return true
//   }
//   return false
// }





// Generate a random 5-digit code
export const sendVerificationEmail = async (toEmail, verificationCode) => {

  
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // Use TLS
    auth: {
      user:"yussefali424@gmail.com",
      pass:"rtyo vnqp ovdm sqhx"
    },
  });

  const mailOptions = {
    from: `"Raf " <${process.env.SMTP_USER}>`,
    to: toEmail,
    subject: 'Bin Code',
    html: `
        <div style="background-color: #35232F; padding: 20px; border-radius: 10px; text-align: center;">
            <h2 style="color: #C48765;">Reset Your Bin Code</h2>
            <p style="color: white; font-size: 16px;">Hello,</p>
            <p style="color: white; font-size: 16px;">
                You requested to reset your bin code. Use the verification code below to proceed:
            </p>
            <h3 style="background: #C48765; color: #35232F; display: inline-block; padding: 10px 20px; border-radius: 8px;">
                ${verificationCode}
            </h3>

            <p style="color: #C48765; font-size: 14px;">Tasis Al Bina Team</p>
        </div>
    `,
};

  await transporter.sendMail(mailOptions);
};

