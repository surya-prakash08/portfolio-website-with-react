import React from 'react';
import ContactForm from './ContactForm';

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
      <div>
        <h2 className='text-orange text-3xl mb-4'>Get In Touch</h2>
        <p className='text-white'>Feel free to reach out if you'd like to hire <br />
        you are a few clicks away!
        </p>
      </div>
      <ContactForm/>
    </div>
  );
}

export default ContactMeLeft;
