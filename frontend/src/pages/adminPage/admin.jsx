// import React from 'react'
// import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
// import { Route, Routes } from 'react-router-dom'
// import Add from '../../components/Add/Add'
// import List from '../../components/List/List'
// import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Outlet } from 'react-router-dom'
import "./admin.css"
const AdminPage = () => {
  return (
    <div className='admin'>
      <h2>Admin DashBoard</h2>
      <ToastContainer />
      {/* <Navbar /> */}
      <hr />
      <div className="app-content">
        <Sidebar />
      </div>
    </div>
  )
}

export default AdminPage