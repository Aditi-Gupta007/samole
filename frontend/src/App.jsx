import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
// import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Add from './components/Add/Add'
import List from './components/List/List'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify'
import AdminPage from './pages/adminPage/admin'
import Profile from './pages/Profile/Profile'
import Product from './pages/singleProduct/Product'
import { productLoader } from './Loaders/loader'

const App = () => {

  const [showLogin,setShowLogin] = useState(false);
  

  return (
    <>
    <ToastContainer/>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<Product/> } />
          
          <Route path="/admin/*" element={<AdminPage />}>
            <Route path="add" element={<Add />} />
            <Route path="list" element={<List />} />
            <Route path="profile" element={<AdminPage />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
