import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, price, desc , id }) => {

    // const [itemCount, setItemCount] = useState(0);
    // const {cartItems,addToCart,removeFromCart,currency} = useContext(StoreContext);
    const url="http://localhost:8000"

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={url+"/images/"+image} alt="" />
                <img className='add'  src={assets.add_icon_white} alt="" />
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{desc}</p>
                <p className="food-item-price">₹{price}</p>
            </div>
        </div>
    )
}

export default FoodItem
