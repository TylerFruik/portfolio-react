import React from 'react';

const Resume = () => {
  return (
    <div className='full-page'>
      <div className="segment">
        <div className="title">
          <h3>Resume</h3>
        </div>
        <div className='resume vh-100 p-5'>
          <iframe src="documents/Tyler Resume.pdf" title='Tyler Fruik Resume'
          width='60%' height='100%'></iframe>
        </div>
      </div>
    </div>
  )
}

export default Resume;