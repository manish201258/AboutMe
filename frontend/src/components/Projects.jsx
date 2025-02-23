import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const projects = [
  {
    title: 'Movie Booking (Cinema Cove)',
    description: 'I developed a full-stack Movie Booking Website using the MERN stack (MongoDB, Express.js, React, and Node.js). This project allows users to browse movies, select showtimes, and book seats in a seamless and interactive manner.',
    image: '/project1.png',
    repoLink: 'https://github.com/manish201258/CinemaCove-Backend',
    liveLink: 'https://cinemacove.netlify.app/',
  },
  {
    title: 'Chater Box',
    description: 'A real-time chat application built with the MERN stack and Socket.io, allowing users to send messages instantly with an intuitive UI.',
    image: '/chatApp.png',
    repoLink: 'https://github.com/manish201258/WebChatApplication',
    liveLink: 'https://chatterrbox.vercel.app/',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className='projects'>
      <div className='container pt-4 pb-4'>
        <div className='d-flex flex-column align-items-center mb-5'>
          <p className='project-section m-0 fs-4 fw-bold'>Projects</p>
        </div>
        <div id='projectCarousel' className='carousel slide' data-bs-ride='carousel' data-bs-interval="3000">

          <div className='carousel-inner'>
            {projects.map((project, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className='d-flex flex-column align-items-center gap-4'>
                  <img src={project.image} alt={project.title} className='img-fluid' />
                  <div className='project-about text-center'>
                    <li className='fw-bold fs-5'>{project.title}</li>
                    <li className='text-secondary'>{project.description}</li>
                    <div className='mt-3'>
                      <a href={project.repoLink} target='_blank' className='btn btn-danger fw-bold m-2 text-decoration-none text-white'>Git Repository</a>
                      <a href={project.liveLink} target='_blank' className='btn btn-danger fw-bold m-2 text-decoration-none text-white'>See Live</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className='carousel-control-prev' type='button' data-bs-target='#projectCarousel' data-bs-slide='prev'>
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          </button>
          <button className='carousel-control-next' type='button' data-bs-target='#projectCarousel' data-bs-slide='next'>
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
