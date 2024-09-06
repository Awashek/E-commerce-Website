import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/Navigation/NavBar'
import Footer from './components/Footer'
import { products } from './db/Products'

export default function Layout() {
  
  //Input filter
  const [query, setQuery] = useState("")

  const handleInputChange = (e) => {
  setSearch(e.target.value)
  }

  const filteredItems = products.filter(product => 
  product.title.toLowerCase().indexOf(search.toLowerCase() !== -1))
  return (
    <div>
      <NavBar query={query} handleInputChange={handleInputChange}/>
      <Outlet />
      <Footer />
    </div>
  )
}
