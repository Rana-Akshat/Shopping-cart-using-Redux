import React from 'react'
import Product from './components/product'
import Cartcomp from './components/cartcomp'
import './App.css'
import './index.css'

function App() {
  
  return (
    <>
      <div className="nav-bar">
        E-cart
      </div>
      <div className="main-page">
        <h1>Shopping Cart store</h1>
        <hr className='cart-hr'/>
        <Product id = {1} name = "Apple iphone" price = {70000}/>
        <img className="prod-img" src="https://tse3.mm.bing.net/th?id=OIP.afbanDymj03v1wtNsN0gFAAAAA&pid=Api&P=0&h=180" alt="iphone" />
        <hr />
        <Product id = {2} name = "Smart TV" price = {170000}/>
        <img className="prod-img" src="https://tse2.mm.bing.net/th?id=OIP.D5Ighw1ruOaER4wQY9VFeQAAAA&pid=Api&P=0&h=180" alt="smart-tv" />
        <hr />
        <Product id = {3} name = "Study table" price = {10000}/>
        <img className="prod-img" src="https://ii1.pepperfry.com/media/catalog/product/b/r/1100x1210/bruges-study-table-with-cabinet-in-brown-finish-by-addy-design-bruges-study-table-with-cabinet-in-br-nwaec3.jpg" alt="study-table" />
        <hr />
        <Cartcomp />
      </div>
    </>
  )
}

export default App
