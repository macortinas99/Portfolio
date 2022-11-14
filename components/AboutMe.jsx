import React from 'react'

function AboutMe() {
  return (
    <div id='about-me-container'>
      <div>
        <p className='projects-title text-6xl xs:text-5xl lg:text-7xl text-gold font-barcode xs:mt-40 mt-56 mb-20 flex justify-center'>About Me</p>
        <div>
          <p className='font-code text-gold xs:w-90% sm:w-90% md:w-70% lg:w-60% mx-auto'>
            I am a <span className='text-teal italic'>Front-end Web Developer</span> who has a strong passion for creating something users enjoy
            using. I enjoy intuitive yet <span className='text-teal italic'>elegant design</span>. I take pride in being a first generation graduate
            within my family knowing many look up to me. I always enjoy learning new things, and take constructive criticism very well. It is what
            makes me such a<span className='text-teal italic'> quick learner</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
