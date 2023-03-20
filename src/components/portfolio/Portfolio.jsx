import React from 'react'
import { Row } from 'react-bootstrap'

const Portfolio = () => {
  return (
    <div>
      <div className='mt-5 pt-5'>
        <h2 className='text-center'>Your Book Is Our Passion – Our Portfolio</h2>
        <p className='text-center'>At Amazon Publishing Company, we provide a gateway for independent authors' ideas, stories and messages to see the <br /> light of day! Take a look at our portfolio to get a glimpse of the projects we have been involved in.</p>
      </div>

      <div className='mt-2'>
        <h2 className='text-center'>Book a Call with Our Consultant to Get Help with Your Book</h2>
        <p className='text-center'>Call Us to Kick-start Your Project Right Away!</p>
      <div className='text-center mb-5'>
          <button type="button" className="btn btn-warning px-4 py-2 mx-1">Start Project</button>
          <button type="button" className="btn btn-secondary px-4 py-2 mx-1">Call Now</button>
      </div>
     
      </div>
    </div>
  )
}

export default Portfolio