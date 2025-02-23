import React from 'react'

const Experience = () => {
  return (
    <>
   <div id='experience' className=' experience-section container'>
    <div className='d-flex flex-column align-items-center mb-5'>
        <p className='exp-section m-0 fs-4 fw-bold'>Experience</p>
    </div>
    <div className='experience-details'>
        <div className='mb-3 p-3 shadow-sm'>
            <div className='card-body'>
                <h5 className='card-title text-danger mb-4'>MERN Stack Intern</h5>
                <p className='card-subtitle mb-2 text-'>NetParam Technology Pvt. Ltd.</p>
                <p className='card-text'>
                    <small>May 2024 - August 2024</small>
                </p>
                <p className='card-text text-secondary'>
                    Worked as a MERN Stack Intern, where I gained hands-on experience in developing full-stack applications. I successfully contributed to the creation of a Movie Booking website, honing my skills in MongoDB, Express.js, React.js, and Node.js.
                </p>
            </div>
        </div>
        <a href="/intern-certificate.pdf" target='_blank'>
       <p className='intern-certificate m-0 intern-btn'>Certificate</p>
        </a>
    </div>
</div>

    </>
  )
}

export default Experience