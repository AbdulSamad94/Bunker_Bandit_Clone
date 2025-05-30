const form = document.querySelector('.contact-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const subject = form.querySelector('select').value;
    const message = form.querySelector('textarea').value.trim();

    // 🛡️ Frontend Spam Protection & Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const spamWords = ["http", "www", "viagra", "sex", "porn"]; // add more if needed

    if (!name || !email || !subject || !message) {
        return alert('please fill out all fields.');
    }

    if (!emailRegex.test(email)) {
        return alert('please enter a valid email address.');
    }

    if (spamWords.some(word => message.toLowerCase().includes(word))) {
        return alert('Spam content detected. Message not sent.');
    }

    if (message.length < 10) {
        return alert('Message is too short.');
    }

    try {
        const res = await fetch('api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, subject, message }),
        });

        const data = await res.json();

        if (data.success) {
            alert('Email successfully sent.');
            form.reset();
        } else {
            alert('Error sending email.');
        }
    } catch (err) {
        alert('Server error.');
    }
});
