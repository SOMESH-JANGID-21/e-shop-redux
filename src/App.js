import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Cart from './component/Cart'
import Home from './component/Home'
import ProductDetails from './component/ProductDetails'
import Product from './component/Product'
import Menu from './Header/Menu'
import Pnf from './Util/Pnf'
import { ToastContainer } from 'react-toastify'


function App(){
  return(
    <Router>
      <Menu/>
      <ToastContainer autoClose = {4000} position = {'top-center'} />
      <Routes>
        <Route path={`/`} element={<Home itemsPerpage = {8}/>} />
        <Route path={`/products/:catName`} element={<Product/>} />
        <Route path={`/product/:id/category/:catname`} element={<ProductDetails/>} />
        <Route path={`/cart`} element={<Cart/>} />
        <Route path={`/*`} element={<Pnf/>} />

      </Routes>
    </Router>
  )
}

export default App