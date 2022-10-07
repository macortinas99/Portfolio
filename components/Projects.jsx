import Image from 'next/image'

import Link from 'next/link'
import Github from '../assets/img/Github.svg'
import Website from '../assets/img/WebsiteIcon.png'

const ProjectCards = ({ projects }) => {
  // console.log(projects)
  return (
    <div className='z-10 lg:grid xs:grid-cols-1 lg:grid-cols-2'>
      {Object.values(projects).map(project => {
        return (
          <Link key={project.id} href={`/project/${project.id}`}>
            <div
              key={project.id}
              className='lg:ml-24 xs:h-72 lg:h-96 mt-12 xs:w-450 lg:w-4/5 xs:ml-16 border-2 border-gold rounded-md xs:p-3 lg:p-5 bg-lightBlack'
            >
              <div>
                <div className='project-card-image'>
                  <Image src={project.image} alt='' width={500} height={300} className='rounded-lg' />
                </div>
                <div className='project-card-cover'></div>
              </div>
              <p className='font-code text-gold text-2xl w-48'>{project.title}</p>
              <p className='absolute z-10 text-xl text-lightBlack bg-gold lg:w-96 xs:mt-6 lg:mt-12 ml-4 p-3 rounded-md'>{project.description}</p>

              <a href={project.github} className=''>
                <Image src={Github} alt='' width={30} height={30} />
              </a>

              {project.website && (
                <a href={project.website}>
                  <Image src={Website} alt='' width={30} height={30} />
                </a>
              )}
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectCards
