import { createContext, useState } from 'react'

const StateContext = createContext({})

export const StateContextProvider = ({ children }) => {
  const [project1, setProject1] = useState({
    title: 'E-Commerce Store',
    description:
      'E-commerce store created with Next.js and Sanity database. Stripe integration is also used to allow for online payments. Shopping cart keeps track of items. Product details page also shows featured products.',
    image: ['/Ecommerce-test2.png', '/Ecommerce-test3.png', '/Ecommerce-test4.png'],
    video: '/EcommerceVideo.mp4',
    github: 'https://github.com/macortinas99/ecommerce_sanity_stripe_template',
    website: 'https://ecommerce-sanity-stripe-template.vercel.app/',
    id: 1,
    skills: ['Next.js/React.js', 'Sanity Database', 'Stripe payment integration', 'Shopping Cart Functionality', 'Full Stack Website'],
  })
  const [project2, setProject2] = useState({
    title: 'Recipe Website',
    description:
      'Recipe app that provides random recipes, filtering by category, and searching capabilities. Data is retrieved via API request and client rendered using React.js.',
    image: ['/E-commerce-sample.png'],
    github: 'https://github.com/macortinas99/React_Recipe_app',
    website: 'https://macortinas99.github.io/React_Recipe_app/',
    id: 2,
  })
  const [project3, setProject3] = useState({
    title: 'Long Project Title Example ... hilksdf ',
    description: 'Using ',
    image: '/E-commerce-sample.png',
    github: 'https://github.com/macortinas99/ecommerce_sanity_stripe_template',
    website: '',
    id: 3,
  })

  return <StateContext.Provider value={{ project1, project2, project3 }}>{children}</StateContext.Provider>
}

export default StateContext
