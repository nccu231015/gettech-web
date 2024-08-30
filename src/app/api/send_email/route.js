// src/app/api/send-email/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
    const { from_name, from_email, phone_number, company, message } = await request.json();

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 465,
        secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    });


    const mailOptions = {
        from: process.env.RECEIVING_EMAIL,
        replyTo: from_email,
        to: "steven2002041@gmail.com",
        subject: `< 台工精密科技 > ${from_name} 自官方網站寄送了一則新訊息`,
        html: `
            <p><span style="font-size: 18pt;">&lt; 台工精密科技 &gt; 官方網站有一則來自 ${from_name} 的新訊息，</span></p>
            <p><span style="font-size: 14pt;">姓名： ${from_name}</span></p>
            <p><span style="font-size: 14pt;">電子郵件：${from_email}</span></p>
            <p><span style="font-size: 14pt;">聯絡電話：${phone_number}</span></p>
            <p><span style="font-size: 14pt;">公司：${company}</span></p>
            <p><span style="font-size: 14pt;">訊息內容：</span></p>
            <blockquote>
            <p><span style="font-size: 14pt;">${message}</span></p>
            </blockquote>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}
