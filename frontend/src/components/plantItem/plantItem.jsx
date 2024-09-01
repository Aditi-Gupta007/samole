import React, { useContext, useState } from 'react'
import './PlantItem.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { StoreContext } from '../../Context/StoreContext';
import {useNavigate} from 'react-router-dom'

const PlantItem = ({ image, name, price, desc , id }) => {

    // const [itemCount, setItemCount] = useState(0);
    const navigate=useNavigate()
    // const {cartItems,addToCart,removeFromCart,currency} = useContext(StoreContext);
    const url="http://localhost:8000"


    return (
        <div className='plant-item' onClick={()=>navigate(`/product/${id}`)}>
            <div className='plant-item-img-container'>
                <img className='plant-item-image' src={url+"/images/"+image} alt="" />
                <img className='add'  src={assets.add_icon_white} alt="" />
            </div>
            <div className="plant-item-info">
                <div className="plant-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="" />
                    
                </div>
                <p className="plant-item-desc">{desc}</p>
                <p className="plant-item-price">₹{price}</p>
            </div>
        </div>
    )
}

export default PlantItem
