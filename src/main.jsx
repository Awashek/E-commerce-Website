import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider,createRoutesFromElements, Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import Login from "./components/Login"
import About from "./components/About"
import Layout from './Layout.jsx'
import Products from './components/Products/Products.jsx'
import ProductDetails from './components/Products/ProductDetails.jsx'
import CartInfo from './components/Products/CartInfo.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/products' element={<Products />}/>
      <Route path='/products/:id' element={<ProductDetails />}/>
      <Route path='/cart' element={<CartInfo />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/about' element={<About />}/>
      </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
