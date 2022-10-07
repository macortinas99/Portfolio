import { createContext, useContext, useState } from 'react'

const StateContext = createContext({
  projects: {},
})

export const StateContextProvider = ({ children }) => {
  const [projects, setProjects] = useState({
    1: {
      title: 'E-Commerce Store',
      description:
        'E-commerce store created with Next.js and Sanity database. Stripe integration is also used to allow for online payments. Shopping cart keeps track of items. Product details page also shows featured products.',
      image: '/E-commerce-sample.png',
      github: 'https://github.com/macortinas99/ecommerce_sanity_stripe_template',
      website: 'https://ecommerce-sanity-stripe-template.vercel.app/',
      id: 1,
    },
    2: {
      title: 'Recipe Website',
      description:
        'Recipe app that provides random recipes, filtering by category, and searching capabilities. Data is retrieved via API request and client rendered using React.js.',
      image: '/E-commerce-sample.png',
      github: 'https://github.com/macortinas99/React_Recipe_app',
      website: 'https://macortinas99.github.io/React_Recipe_app/',
      id: 2,
    },
    3: {
      title: 'Recipe Website',
      description: 'Using ',
      image: '/E-commerce-sample.png',
      github: 'https://github.com/macortinas99/ecommerce_sanity_stripe_template',
      website: '',
      id: 3,
    },
  })

  return <StateContext.Provider value={{ projects }}>{children}</StateContext.Provider>
}

export default StateContext

// export function ContextWrapper({ children }) {
//   const [projects, setProjects] = useState({
//     1: {
//       title: 'E-Commerce Store',
//       description:
//         'E-commerce store created with Next.js and Sanity database. Stripe integration is also used to allow for online payments. Shopping cart keeps track of items. Product details page also shows featured products.',
//       image: '/E-commerce-sample.png',
//       github: 'https://github.com/macortinas99/ecommerce_sanity_stripe_template',
//       website: 'https://ecommerce-sanity-stripe-template.vercel.app/',
//       id: 1,
//     },
//     2: {
//       title: 'Recipe Website',
//       description:
//         'Recipe app that provides random recipes, filtering by category, and searching capabilities. Data is retrieved via API request and client rendered using React.js.',
//       image: '/E-commerce-sample.png',
//       github: 'https://github.com/macortinas99/React_Recipe_app',
//       website: 'https://macortinas99.github.io/React_Recipe_app/',
//       id: 2,
//     },
//     3: {
//       title: 'Recipe Website',
//       description: 'Using ',
//       image: '/E-commerce-sample.png',
//       github: 'https://github.com/macortinas99/ecommerce_sanity_stripe_template',
//       website: '',
//       id: 3,
//     },
//   })

//   return <StateContext.Provider value={{ projects }}>{children}</StateContext.Provider>
// }

// export function useStateContext() {
//   return useContext(StateContext)
// }
