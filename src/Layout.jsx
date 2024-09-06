import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/Navigation/NavBar'
import Footer from './components/Footer'
import { products } from './db/Products'
import { useState } from 'react'
import Card from './Card'

export default function Layout() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };


  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }


    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return (
        <div className="flex flex-wrap justify-center p-4 bg-gray-100">
          {filteredProducts.map((product) => (
            <Card
              key={product.title}
              img={product.img}
              title={product.title}
              star={product.star}
              reviews={product.reviews}
              prevPrice={product.prevPrice}
              newPrice={product.newPrice}
            />
          ))}
        </div>
      );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
      <NavBar query={query} handleInputChange={handleInputChange}/>
      <Outlet context={{result}}/>
      <Footer />
    </div>
  )
}
