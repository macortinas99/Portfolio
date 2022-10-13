import Head from 'next/head'
import Header from '../components/Header'
import ProjectCards from '../components/Projects'
import { useState, useEffect, useContext } from 'react'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import ParticlesComponent from '../components/ParticleComponent'
import Image from 'next/image'
import StateContext from '../context/StateContext'

export default function Home() {
  const { project1, project2, project3 } = useContext(StateContext)
  const projects = { project1, project2, project3 }
  // const projects = {
  //   1: {
  //     title: 'E-Commerce Store',
  //     description:
  //       'E-commerce store created with Next.js and Sanity database. Stripe integration is also used to allow for online payments. Shopping cart keeps track of items. Product details page also shows featured products.',
  //     image: '/E-commerce-sample.png',
  //     github: 'https://github.com/macortinas99/ecommerce_sanity_stripe_template',
  //     website: 'https://ecommerce-sanity-stripe-template.vercel.app/',
  //     id: 1,
  //   },
  //   2: {
  //     title: 'Recipe Website',
  //     description:
  //       'Recipe app that provides random recipes, filtering by category, and searching capabilities. Data is retrieved via API request and client rendered using React.js.',
  //     image: '/E-commerce-sample.png',
  //     github: 'https://github.com/macortinas99/React_Recipe_app',
  //     website: 'https://macortinas99.github.io/React_Recipe_app/',
  //     id: 2,
  //   },
  //   3: {
  //     title: 'Recipe Website',
  //     description: 'Using ',
  //     image: '/E-commerce-sample.png',
  //     github: 'https://github.com/macortinas99/ecommerce_sanity_stripe_template',
  //     website: '',
  //     id: 3,
  //   },
  //   // 4: {
  //   //   title: 'E-Commerce Store',
  //   //   description: 'E-commerce store created with Next.js and Sanity database. Stripe integration is also used to allow for online payments.',
  //   //   image: '/E-commerce-sample.png',
  //   //   github: 'https://github.com/macortinas99/ecommerce_sanity_stripe_template',
  //   //   website: 'https://ecommerce-sanity-stripe-template.vercel.app/',
  //   //   id: 4,
  //   // },
  //   // 5: {
  //   //   title: 'E-Commerce Store',
  //   //   description: 'E-commerce store created with Next.js and Sanity database. Stripe integration is also used to allow for online payments.',
  //   //   image: '/E-commerce-sample.png',
  //   //   github: 'https://github.com/macortinas99/ecommerce_sanity_stripe_template',
  //   //   website: 'https://ecommerce-sanity-stripe-template.vercel.app/',
  //   //   id: 5,
  //   // },
  // }

  const scrollEffect = () => {
    if (window.scrollY <= 500) {
      document.getElementById('projects').style.opacity = '0'
      document.getElementById('projects').style.marginLeft = '-2200px'
      document.getElementById('projects-title').style.opacity = '0'
    }

    if (window.scrollY >= 500) {
      document.getElementById('projects').style.opacity = '1'
      document.getElementById('projects').style.marginLeft = '0px'
      document.getElementById('projects-title').style.opacity = '1'
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollEffect)
    return () => window.removeEventListener('scroll', scrollEffect)
  }, [])

  return (
    <div>
      <Head>
        <meta charset='UTF-8' />
        <meta name='keywords' content='titla, meta, nextjs' />
        <meta name='author' content='Syamlal CM' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Matthew's Portfolio</title>
        <link rel='shortcut icon' href='/Suit_profile.jpg'></link>
      </Head>
      <Header />

      <div className='xs:w-96 sm:w-96 md:w-96 lg:w-1/3 mt-64 xs:mx-28 sm:mx-auto mx-auto'>
        <div className='flex-col '>
          <p className='text-gray font-code'>Hi, my name is</p>

          <p className='text-gold shadow-border animate-pulse shadow-gold rounded-lg text-4xl font-logo mt-5 p-3 pl-14 '>Matthew Cortinas.</p>
          <p className='mt-3 text-gold text-3xl'>I am a Front-end Web Developer.</p>
          <p className='text-gray font-code mt-5 w-4/5'>
            My expertise is in <span className='text-teal italic'>React.js</span> and <span className='text-teal italic'>Next.js</span>. My current
            position is Senior Frontend Developer at <span className='text-teal italic'>Seminaut Inc.</span> I specialize in creating{' '}
            <span className='text-teal italic'>live</span> interactive maps and components for the live map page. My main responsibilities include
            adding new features to the map page, <span className='text-teal italic'>leading</span> a team of 6 interns, weekly merge request
            approvals, weekly meetings with the executive team, etc. I am looking forward to showing you these features when they are released to the
            public.
          </p>
        </div>
      </div>
      <p
        id='projects-title'
        className='projects-title xs:text-6xl md:text-6xl lg:text-7xl text-gold font-barcode mt-96 mb-24 xs:mx-45% flex md: justify-center lg:justify-center opacity-0'
      >
        Projects
      </p>
      <div id='projects' className='projects lg:w-screen xs:mx-auto opacity-0'>
        <ProjectCards projects={projects} />
      </div>

      <ContactMe />
      <Footer />

      <ParticlesComponent />
    </div>
  )
}
