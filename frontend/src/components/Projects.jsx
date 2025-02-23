import React from 'react'

const Projects = () => {
  return (
    <>
    <div className='projects'>
        <div className='container pt-4 pb-4'>
    <div className='d-flex flex-column align-items-center mb-5'>
        <p className='project-section m-0 fs-4 fw-bold'>Projects</p>
    </div>
    <div className='d-flex flex-column align-items-center gap-4'>
        <img src="/project1.png" alt="" />
    <div  className='project-about'>
        <li className='fw-bold fs-5'>Movie Booking (Cinema Cove)</li>
        <li className='text-secondary'>I developed a full-stack Movie Booking Website using the MERN stack (MongoDB, Express.js, React, and Node.js). This project allows users to browse movies, select showtimes, and book seats in a seamless and interactive manner.</li>
        <div className='mt-3'>
        <div className='pe-5 btn btn-danger fw-bold m-2'><a href='https://github.com/manish201258/CinemaCove-Backend' target='_blank' className='project-btn text-decoration-none text-white'>Git Repository</a></div>
        <div className='pe-5 btn btn-danger fw-bold m-2'><a  href='https://cinemacove.netlify.app/' target='_blank' className='project-btn text-decoration-none text-white'>See Live</a></div>
      </div>
      </div>
     
    </div>
        </div>
</div>
    </>
  )
}

export default Projects