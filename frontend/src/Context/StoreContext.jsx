/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {  menu_list } from "../assets/assets";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {


    const url = "http://localhost:4000"
    const [food_list, setFoodList] = useState([]);
    // const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("")
    const currency = "₹";
    const deliveryCharge = 50;

    const [currentUser, setCurrentUser] = useState(localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")): null);

    const update=(data)=>
    {
      setCurrentUser(data);
      if (data) {
        setToken(localStorage.getItem("token"));
    } else {
        setToken("");
    }
    }
    useEffect(()=>
        {
            if (currentUser) {
                localStorage.setItem("user", JSON.stringify(currentUser));
              } else {
                localStorage.removeItem("user"); // Clear the user data from localStorage on logout
              } 
        },[currentUser]);
    

    // const addToCart = async (itemId) => {
    //     if (!cartItems[itemId]) {
    //         setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    //     }
    //     else {
    //         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    //     }
    //     if (token) {
    //         await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
    //     }
    // }

    // const removeFromCart = async (itemId) => {
    //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    //     if (token) {
    //         await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
    //     }
    // }

    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const item in cartItems) {
    //         if (cartItems[item] > 0) {
    //             let itemInfo = food_list.find((product) => product._id === item);
    //             if (itemInfo) {
    //                 totalAmount += itemInfo.price * cartItems[item];
    //             } else {
    //                 console.warn(`Item with ID ${item} not found in food_list.`);
    //             }
    //         }
    //     }
    //     return totalAmount;
    // }
    
    const fetchFoodList = async () => {
        const response = await axios.get( "http://localhost:8000/api/food/list");
        setFoodList(response.data.data)
    }

    // const loadCartData = async (token) => {
    //     try {
    //         const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
    //         setCartItems(response.data.cartData);
    //     } catch (error) {
    //         console.error("Error loading cart data:", error.message);
    //     }
    
    // }

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                // await loadCartData({ token: localStorage.getItem("token") })
            }
        }
        loadData()
    }, [])

    const contextValue = {
        url,
        food_list,
        menu_list,
        // cartItems,
        // addToCart,
        // removeFromCart,
        // getTotalCartAmount,
        token,
        setToken,
        // loadCartData,
        // setCartItems,
        // currency,
        // deliveryCharge,
        currentUser,update
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;