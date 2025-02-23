import React from 'react'

const AboutMe = () => {
  return (
    <>
    <div className='Aboutme'>
    <div className='about-me d-flex flex-column align-items-center'>
        <h3 className='fw-bold'>About Me</h3>
        <p className=' abouttext ' style={{color:"#aca4a4"}}>My Introduction</p>
            <p className=' about-text mt-3 mb-5 text-secondary' style={{
                width:"40%",
                textAlign:"center"
            }}>
                I'm a final-year BCA student with a deep passion for technology and a love for reading. I'm self-motivated with a can-do attitude, thriving in challenging and dynamic environments. I'm eager to learn new things that interest me and continuously improve. Currently, I'm seeking a competitive position where I can enhance my skills and contribute meaningfully to a professional organization.
            </p>
            <div className='class-data d-flex justify-content-between' style={{width:"33%"}}>
                {/* Cgpa */}
            <div className='d-flex flex-column align-items-center'>
            <p className='m-0 fs-3 fw-bold'>07.88+</p>
            <p className=' abouttext m-0'>Aggregate</p>
            <p className=' abouttext m-0'>CGPA</p>
            </div>
            {/* Project */}
            <div className='d-flex flex-column align-items-center'>
            <p className='m-0 fs-3 fw-bold'>04+</p>
            <p className=' abouttext m-0'>Projects</p>
            </div>
            {/* Exp */}
            <div className='d-flex flex-column align-items-center'>
            <p className='m-0 fs-3 fw-bold'>03+</p>
            <p className=' abouttext m-0'>Months</p>
            <p className=' abouttext m-0'>Experience</p>
            </div>
            </div>
    </div>
    </div>
    </>
  )
}

export default AboutMe