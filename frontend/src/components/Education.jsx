import React from 'react'

const Education = () => {
  return (
    <>
     <div className='education Qualification'>
    <div className='d-flex flex-column align-items-center'>
        <h3 className='fw-bold'>Qualification</h3>
        <p className=' abouttext ' style={{color:"#aca4a4"}}>My Journey</p>
          <div className='edu-img d-flex align-items-center gap-3 me-5'>
            <img src="/education.png" alt="" />
            <p className='m-0 fs-4'>Education</p>
          </div>
          <div className='qualification-content mb-5'>
            <div className='d-flex flex-column justify-content-around gap-5 'style={{height:"100%"}}>
              <div className='sslc'>
                <li className='fw-bold mb-2'>Class 10th</li>
                <li>Krishna Public S.S. School</li>
                <li className='year'>- 2017</li>
                <li className=' view-more mt-2'>view more</li>
              </div>
              <div className='college'>
                <li className='fw-bold mb-2'>Bachelor of Computer Application</li>
                <li>Poornima University, Jaipur</li>
                <li className='year'>2022 - 2025</li>
                <li className=' view-more mt-2'>view more</li>
              </div>
            </div>

            <div className='d-flex flex-column'>
              <div className='qualification-line1'>
              </div>
              <div className='qualification-line2'>
            </div>
            </div>

            <div className='sss'>
            <li className='fw-bold mb-2'>Class 12th (Science)</li>
                <li>Abhilasha Sr. Sec. Sandwa</li>
                <li className='year'>- 2019</li>
                <li className=' view-more mt-2'>view more</li>
            </div>
          </div>
    </div>
    </div>
    </>
  )
}

export default Education