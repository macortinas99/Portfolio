import Image from 'next/image'
import Link from 'next/link'
import Github from '../assets/img/Github.svg'
import Website from '../assets/img/WebsiteIcon.png'

const ProjectCards = ({ projects }) => {
  return (
    <div className='z-10 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
      {Object.values(projects).map(project => {
        return (
          <div
            key={project.id}
            className='hover:border-teal hover:border-4 mx-auto z-10 xs:h-72 sm:h-72 md:h-96 lg:h-96 xs:mt-6 mt-12 xs:w-90% sm:w-70% md:w-80% lg:w-4/5 xs:mx-auto border-2 border-gold rounded-md xs:p-3 sm:p-3 md:p-3 lg:p-5 bg-lightBlack'
          >
            <Link key={project.id} href={`/project/${project.id}`}>
              <div>
                <div>
                  <div className='project-card-image'>
                    <Image src={project.image[0]} alt='' width={500} height={300} className='rounded-lg' />
                  </div>
                  {/* <div className='project-card-cover'></div> */}
                </div>
                <p className='font-code text-gold xs:text-lg sm:text-xl md:text-2xl lg:text-2xl sm:w-60% md:w-48 lg:w-62'>{project.title}</p>

                <p className='absolute z-10 xs:hidden xs:text-base sm:text-sm text-xl text-lightBlack bg-gold xs:w-60% sm:w-50% md:w-40% lg:w-96 xs:mt-6 sm:mt-28 md:mt-12 lg:mt-16 sm:ml-6 md:ml-24 lg:ml-4 sm:p-2 md:p-2 lg:p-3 rounded-md'>
                  {project.description.length > 200 ? `${project.description.slice(0, 200)}...` : project.description}
                </p>

                <Link href={project.github}>
                  <a target='_blank'>
                    <Image src={Github} alt='' width={30} height={30} />
                  </a>
                </Link>

                {project.website && (
                  <Link href={project.website}>
                    <a target='_blank'>
                      <Image src={Website} alt='' width={30} height={30} />
                    </a>
                  </Link>
                )}
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectCards
