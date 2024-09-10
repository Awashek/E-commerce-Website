import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/Navigation/NavBar'
import Footer from './components/Footer'
import { products } from './db/Products'
import { useState } from 'react'
import Card from './components/Card'

export default function Layout() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
  );

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };


  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, search) {
    let filteredProducts = products;

    if (search) {
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
              id={product.id}
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

  const result = filteredData(products, selectedCategory, search);


  const handleAddToCart = () => {
    console.log("added")
  }

  const handleShopNow = () => {
    console.log("added")
  }

  return (
    <div>
      <NavBar search={search} handleInputChange={handleInputChange}/>
      <Outlet context={{result, handleChange, handleClick, handleShopNow}}/>
      <Footer />
    </div>
  )
}
