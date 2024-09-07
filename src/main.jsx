import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider,createRoutesFromElements, Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import Login from "./components/Login"
import About from "./components/About"
import Layout from './Layout.jsx'
import Products from './components/Products/Products.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/Products' element={<Products />}/>
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
