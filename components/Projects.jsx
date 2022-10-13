import Image from 'next/image'
import Link from 'next/link'
import Github from '../assets/img/Github.svg'
import Website from '../assets/img/WebsiteIcon.png'

const ProjectCards = ({ projects }) => {
  return (
    <div className='z-10 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
      {Object.values(projects).map(project => {
        return (
          <Link key={project.id} href={`/project/${project.id}`}>
            <div
              key={project.id}
              className='md:mx-auto lg:mx-auto xs:h-72 md:h-96 lg:h-96 mt-12 xs:w-450 md:w-80% lg:w-4/5 xs:ml-16 border-2 border-gold rounded-md xs:p-3 md:p-3 lg:p-5 bg-lightBlack'
            >
              <div>
                <div className='project-card-image'>
                  <Image src={project.image[0]} alt='' width={500} height={300} className='rounded-lg' />
                </div>
                {/* <div className='project-card-cover'></div> */}
              </div>
              <p className='font-code text-gold md:text-2xl lg:text-2xl md:48 lg:w-48'>{project.title}</p>
              <p className='absolute z-10 text-xl text-lightBlack bg-gold md:w-60% lg:w-96 xs:mt-6 md:mt-12 lg:mt-16 md:ml-24 lg:ml-4 lg:p-3 rounded-md'>
                {project.description}
              </p>

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
