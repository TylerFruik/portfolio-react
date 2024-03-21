import React from 'react';

import ContactForm from '../../components/ContactForm';

const Contact = () => {
  return (
    <div className='full-page'>
      <div class="segment">
        <div class="title">
          <h3>Contact</h3>
        </div>
        <div className='form'>
          <h1>Here be a form</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact;
