import React from 'react';

const ContactForm = () => {
    return (
        <div className='w-screen m-auto p-4 h-screen'>
            <h1> Contact Us </h1>
            <form>
                <div>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                    <input type="email" placeholder='Email'/>
                </div>
                <input type="text" placeholder='Subject'/>
                <textarea type="text" placeholder='Message'></textarea>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;