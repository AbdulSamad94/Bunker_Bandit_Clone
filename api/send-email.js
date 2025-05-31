import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Only POST allowed' });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Please fill all fields' });
    }

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev', // yeh default he, domain verify karoge to change kar sakte ho
            to: 'abdulsamadwork109@gmail.com',
            subject: `Contact Form: ${subject}`,
            text: `From: ${name} <${email}>\n\n${message}`,
        });

        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
