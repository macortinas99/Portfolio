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

  const scrollEffect = () => {
    // Screens larger than 600px wide
    if (window.scrollY <= 500 && screen.width > 600) {
      document.getElementById('projects').style.opacity = '0'
      document.getElementById('projects').style.marginLeft = '-2200px'
      document.getElementById('projects-title').style.opacity = '0'
    }

    if (window.scrollY >= 500 && screen.width > 600) {
      document.getElementById('projects').style.opacity = '1'
      document.getElementById('projects').style.marginLeft = '0px'
      document.getElementById('projects-title').style.opacity = '1'
    }
    // Screens smaller than 600px wide
    if (window.scrollY <= 500 && screen.width < 600) {
      document.getElementById('projects').style.opacity = '0'
      document.getElementById('projects').style.marginLeft = '-100px'
      document.getElementById('projects-title').style.opacity = '0'
    }

    if (window.scrollY >= 500 && screen.width < 600) {
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

      <div className='xs:w-80% sm:w-60% md:w-50% lg:w-40% xs:mt-32 mt-64 xs:mx-auto sm:mx-auto mx-auto'>
        <div className='flex-col '>
          <p className='text-gray font-code'>Hi, my name is</p>

          <p className='text-gold shadow-border animate-pulse shadow-gold rounded-lg xs:text-2xl text-4xl font-logo mt-5 p-3 pl-14 '>
            Matthew Cortinas.
          </p>
          <p className='mt-3 text-gold text-3xl'>I am a Front-end Web Developer.</p>
          <p className='text-gray font-code mt-5 xs:w-100% w-4/5'>
            My expertise is in <span className='text-teal italic'>React.js</span> and <span className='text-teal italic'>Next.js</span>. My current
            position is <span className='text-teal italic'>Senior</span> Frontend Developer at <span className='text-teal italic'>Seminaut Inc.</span>{' '}
            I specialize in creating <span className='text-teal italic'>live</span> interactive maps and components for the live map page. My main
            responsibilities include adding new features to the map page, <span className='text-teal italic'>leading</span> a team of 6 interns,
            weekly merge request approvals, weekly meetings with the executive team, etc. I am looking forward to showing you these features when they
            are released to the public.
          </p>
        </div>
      </div>
      <p
        id='projects-title'
        className='projects-title text-6xl xs:text-5xl lg:text-7xl text-gold font-barcode xs:mt-40 mt-96 mb-24 flex justify-center opacity-0'
      >
        Projects
      </p>
      <div id='projects' className='projects lg:w-screen xs:mx-auto opacity-0'>
        <ProjectCards projects={projects} />
      </div>

      <ContactMe />
      <Footer />

      {/* {global.innerWidth > 600 && } */}
      <ParticlesComponent />
    </div>
  )
}
