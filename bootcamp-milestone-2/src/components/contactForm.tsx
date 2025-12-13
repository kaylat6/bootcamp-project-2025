'use client'
import {useState} from 'react';
import style from "./contactForm.module.css";
import emailjs from '@emailjs/browser';

export default function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submit, setSubmit] = useState(false);

    const handleSubmit = async () => {
        setSubmit(true);

        if (!name.trim() || !email.trim() || !message.trim()) {
            alert('Please fill out all fields');
            return;
        }

        try {
            await emailjs.send(
                'service_rnk6azl', 'template_5ey380a',
                {from_name: name, from_email: email, message: message},
                'yzBGAIn-4A2fpNaFZ'
            );
            //reset
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            alert("Failed to send email.")
        } finally {
            setSubmit(false)
        }
    };

    return (
        <div className={style.formContainer}>
            <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={style.input}
            />

            <input
                type="text"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={style.input}
            />

            <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={style.textarea}
            />

            <button 
                onClick={handleSubmit} 
                disabled={submit}
                className={style.submitButton}
            >
                {submit ? 'Submitting...' : 'Submit Form'}
            </button>
        </div>
    )
}
