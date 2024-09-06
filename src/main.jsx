import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider,createRoutesFromElements, Route } from "react-router-dom"
import Hero from "./components/Hero.jsx"
import Login from "./components/Login"
import About from "./components/About"
import Layout from './Layout.jsx'
import Products from './components/Products/Products.jsx'
import { products } from './db/Products.js'

  const [selectedCategory, setselectedCategory] =useState(null)

//Input filter
  const [query, setQuery] = useState("")

  const handleInputChange = (e) => {
  setSearch(e.target.value)
  }

  const filteredItems = products.filter(product => 
  product.title.toLowerCase().indexOf(search.toLowerCase() !== -1))

//Radio Filter
  const handleChange = (e) => {
    setselectedCategory(e.target.value)
  }

//Recommended buttons  filter
  const handelButton = (e) => {
    setselectedCategory(e.target.value)
  }
  const filteredData = (products,selected,query) => {
    let filteredProducts = products
  
    //Filtering input
    if(query) {
      filteredProducts = filteredItems
    }

    //Selected Filter
    if(selected) {
      filteredProducts = filteredProducts.filter(({
        category, color, company, newPrice, title}) => 
          category === selected || color === selected ||
          company === selected || newPrice === selected||
          title === selected)
        }
        return filteredProducts.map(({img}))
      }
  

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout />}>
      <Route path='' element={<Hero/>}/>
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
