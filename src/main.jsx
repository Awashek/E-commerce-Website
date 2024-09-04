import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider,createRoutesFromElements, Route } from "react-router-dom"
import Hero from "./components/Hero.jsx"
import Login from "./components/Login"
import About from "./components/About"
import Layout from './Layout.jsx'
import Shop from './components/shop.jsx'
import { products } from './Products.js'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout />}>
      <Route path='' element={<Hero products={products}/>}/>
      <Route path='/Shop' element={<Shop />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/About' element={<About />}/>
      </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
