import React from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const ContactMe = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs.sendForm('service_o13hyp9', 'template_asw2wjm', form.current, '8j4X47PK2v7aa2Hr6').then(
      result => {
        alert('email sent')
      },
      error => {
        console.log(error.text)
      }
    )
  }

  return (
    <div className='mb-12 z-2'>
      <h1 className='xs:text-6xl lg:text-7xl xs:mt-24 lg:mt-36 flex xs:w-4/5 xs:ml-35% xs:mb-16 lg:mb-24 lg:justify-center text-gold font-barcode'>
        Contact Me
      </h1>

      <div className='flex lg:justify-center xs:w-screen xs:ml-20'>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='bg-lightBlack text-teal font-code lg:text-xl xs:w-450 lg:w-1/2 border-2 border-gold rounded-xl xs:h-450 lg:h-500 flex lg:justify-center '
        >
          <div className='flex-col'>
            <div className='my-6 xs:ml-3'>
              <label className='mr-10 xs:text-2xl'>Name:</label>
              <input className='xs:mt-2 border-2 rounded-md border-navyBlue bg-gold text-black w-96' type='text' name='user_name' />
            </div>
            <div className='lg:my-6 xs:ml-3'>
              <label className='lg:mr-7 xs:text-2xl'>Email:</label>
              <input className='xs:mt-2 border-2 rounded-md border-navyBlue bg-gold text-black w-96' type='email' name='user_email' />
            </div>
            <div className='lg:my-6 flex-wrap w-12'>
              <label className='xs:text-2xl xs:ml-3'>Message:</label>
              <textarea
                className='lg:mt-3 xs:mt-2 xs:ml-3 border-2 rounded-md border-navyBlue bg-gold text-black w-96'
                type='email'
                name='message'
                rows={6}
              />
            </div>
            <input
              type='submit'
              value='Send Email'
              className='bg-navyBlue border-2 border-teal xs:ml-24 lg:ml-24 xs:mt-3 xs:w-1/2 lg:w-1/2 p-2 rounded-lg hover:bg-white hover:scale-110 ease-out duration-200'
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactMe
