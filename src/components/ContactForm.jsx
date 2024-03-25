import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState ({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log('test1')
  };

  const handleSubmit = async e => {
    console.log('test2')
    e.preventDefault();
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      console.log('test3')
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
  <form onSubmit={handleSubmit} className='container h-100'>
    <div className='row pb-3'>
      <div className='col-12 d-flex justify-content-center'>
        <div className='row'>
          <div className='col-md-5 m-2'>
            <input
              className='text-dark'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Your name or business'
            />
          </div>
          <div className='col-md-5 m-2'>
            <input
              className='text-dark'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Your email'
            />
          </div>
        </div>
      </div>
    </div>
    <div className='row h-50'>
      <div className='col-12 d-flex justify-content-center'>
        <textarea
          className='col-6 h-100 text-dark'
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here. I'll get back to you within 24 hours!"
        ></textarea>
      </div>
    </div>
    <div className='row'>
      <div className='col-12 d-flex justify-content-center pt-5'>
        <button 
        className='fs-3 fw-bolder text-dark'
        type='submit'>
          Submit
        </button>
      </div>
    </div>
  </form>
  );
};

export default ContactForm;
