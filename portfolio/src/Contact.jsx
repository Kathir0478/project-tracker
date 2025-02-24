import React, { useState } from 'react'
import MailImage from './assets/mail.webp';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [data, changeData] = useState({ 'name': "", 'email': '', 'subject': '' });
    const handleChange = (e) => {
        changeData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_je1btpq',
            'template_3j31avt',
            data,
            'Tm_Lo8uGiYyx265jm'
        ).then((response) => {
            console.log("Email sent successfully!", response);
            alert("Email sent successfully!");
            changeData({ name: "", email: "", subject: "" }); // Reset form
        })
            .catch((error) => {
                console.error("Failed to send email", error);
                alert("Failed to send email. Try again later.");
            });
    }

    const handleReset = () => {
        changeData({ 'name': "", 'email': '', 'subject': '' });
    }

    return (
        <div id='contact' className='flex flex-col h-screen w-full items-center justify-center'>
            <div className='flex w-full justify-evenly items-center '>
                <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                    <input type='text' name='name' placeholder='Name' value={data.name} onChange={handleChange} required />
                    <input type='email' name='email' placeholder='Email' value={data.email} onChange={handleChange} required />
                    <textarea name='subject' value={data.subject} placeholder='Enter your Message here' onChange={handleChange} required />
                    <div className='flex justify-evenly'>
                        <button type='submit' >Submit</button>
                        <button type='button' onClick={handleReset} > Reset</button>
                    </div>
                </form>
                <img src={MailImage} alt='Mail' className='size-60' />
            </div>
        </div>
    )
}

export default Contact