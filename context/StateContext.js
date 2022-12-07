import { createContext, useState } from 'react'

const StateContext = createContext({})

export const StateContextProvider = ({ children }) => {
  const [project1, setProject1] = useState({
    title: 'Full Stack Pizza Ordering Website',
    description:
      "A pizza ordering website that shows real products held in the Mongo DB. Customers can choose from the pizza they want with options such as pizza sizes and extra add ons. Shopping cart keeps track of pizza's the customer has selected. Once they are ready to proceed to checkout they can choose their payment method. Cash on delivery or pay with Paypal. There is also an admin page that uses a cookies token to provide authentication once logged in. In the admin page you can add, edit, and delete products. You can also change the status of of delivery so that the customer can have know which process their order is in. NOTE: This project was focused on the logic and not design or responsiveness.",
    image: [
      '/PizzaOrderingFullStack/pizzaApp1.PNG',
      '/PizzaOrderingFullStack/pizzaApp2.PNG',
      '/PizzaOrderingFullStack/pizzaApp3.PNG',
      '/PizzaOrderingFullStack/pizzaApp4.PNG',
      '/PizzaOrderingFullStack/pizzaApp5.PNG',
      '/PizzaOrderingFullStack/pizzaApp6.PNG',
      '/PizzaOrderingFullStack/pizzaApp7.PNG',
      '/PizzaOrderingFullStack/pizzaApp8.PNG',
      '/PizzaOrderingFullStack/pizzaApp9.PNG',
    ],
    video: '/PizzaOrderingFullStack/PizzaAppVideo1.mp4',
    github: 'https://github.com/macortinas99/FullStackNextJsFoodOrderingApp',
    website: '',
    id: 1,
    skills: ['React/Next.js', 'Mongo DB', 'Redux', 'Cloudinary', 'Paypal Payment', 'REST API', 'CRUD', 'Cookies/Token authentication', 'Full Stack'],
  })
  const [project2, setProject2] = useState({
    title: 'E-Commerce Store',
    description:
      'E-commerce store created with Next.js and Sanity database. Stripe integration is also used to allow for online payments. Shopping cart keeps track of items. Product details page also shows featured products.',
    image: ['/Ecommerce-test2.png', '/Ecommerce-test3.png', '/Ecommerce-test4.png'],
    video: '/EcommerceVideo.mp4',
    github: 'https://github.com/macortinas99/ecommerce_sanity_stripe_template',
    website: 'https://ecommerce-sanity-stripe-template.vercel.app/',
    id: 2,
    skills: ['Next.js/React.js', 'Sanity Database', 'Stripe payment integration', 'Shopping Cart Functionality', 'Full Stack Website', 'REST API'],
  })
  const [project3, setProject3] = useState({
    title: 'Recipe Website',
    description:
      'Recipe app that provides random recipes, filtering by category, and searching capabilities. Data is retrieved via Spoonacular API request and client rendered using React.js.',
    image: ['/RecipeAppImages/RecipeAppImg1.PNG', '/RecipeAppImages/RecipeAppImg2.PNG', '/RecipeAppImages/RecipeAppImg3.PNG'],
    video: '/RecipeAppImages/RecipeVideo.mp4',
    github: 'https://github.com/macortinas99/React_Recipe_app',
    website: 'https://macortinas99.github.io/React_Recipe_app/',
    id: 3,
    skills: ['React.js', 'Styled Components', 'Search/Filter recipe functionality', 'REST API'],
  })

  return <StateContext.Provider value={{ project1, project2, project3 }}>{children}</StateContext.Provider>
}

export default StateContext
