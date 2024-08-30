import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import axios from 'axios'
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';

const MyOrders = () => {

  const {currentUser}=useContext(StoreContext);
  // console.log(currentUser);

  const [data,setData] =  useState([]);
  const {url,token,currency} = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
    setData(response.data.data)
  }

  useEffect(()=>{
    if (token) {
      fetchOrders();
    }
  },[token])




  return (
    <div className='my-orders'>
        <div className="profilePage">
          <div className="title">
                <h2 className='user-tittle'>User Information</h2>
          </div>
          <div className="info">
              <span className='avatar'>
                <img src="./noAvatar.jpg" alt=""  className='avatar-icon'/>
              </span>
              <div className='user'>
                <span className='name'>
                  <b>{currentUser.name}</b>
                </span>
                 <span className='email'>
                    <b>{currentUser.email}</b>
                </span>
            </div>
            </div>
        </div>

      <h2>My Orders</h2>
      <div className="container">
        {data.map((order,index)=>{
          return (
            <div key={index} className='my-orders-order'>
                <img src={assets.parcel_icon} alt="" />
                <p>{order.items.map((item,index)=>{
                  if (index === order.items.length-1) {
                    return item.name+" x "+item.quantity
                  }
                  else{
                    return item.name+" x "+item.quantity+", "
                  }
                  
                })}</p>
                <p>{currency}{order.amount}.00</p>
                <p>Items: {order.items.length}</p>
                <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                <button onClick={fetchOrders}>Track Order</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyOrders
