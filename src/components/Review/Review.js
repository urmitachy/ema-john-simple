<<<<<<< HEAD
import React, {  useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';


const Review = () => {

        const[cart,setCart] = useState([])

        const removeProduct = (productkey) => {
          console.log('remove clicked',);
        }

       useEffect (()=>{
=======
import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
        const[cart,setCart] = useState([]);
        const [orderPlaced, setOrderPlaced] = useState(false)

        const handlePlaceOrder = () => {
          setCart([]);
          setOrderPlaced(true);
          processOrder();
        }

        const removeProduct = (productkey) =>{
        const newCart = cart.filter(pd => pd.key !== productkey);
        setCart(newCart);
        removeFromDatabaseCart(productkey)

        }

      useEffect(()=>{
>>>>>>> 4bcc1d47d2905fa5567e57b813e03a802c14af72
        // cart  
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart)

       const cartProducts = productKeys.map(key => {
         const product = fakeData.find(pd => pd.key === key);
         product.quantity = savedCart[key];
         return product;
       });
        setCart(cartProducts);
<<<<<<< HEAD
      },)
    return (
        <div>
            <h1>Cart Items :{cart.length}</h1>
            {
=======
      },[])

      let thankyou;
      if(orderPlaced){
       thankyou = <img src={happyImage} alt="" />
      } 
    return (
        <div className = "twin-container">
           <div className = "product-container">
           {
>>>>>>> 4bcc1d47d2905fa5567e57b813e03a802c14af72
              cart.map(pd => <ReviewItem 
                key = {pd.key}
                removeProduct = {removeProduct}
                product ={pd}></ReviewItem>)
<<<<<<< HEAD
            }
=======
          }
          {
              thankyou
          }
           </div>
           <div className = "cart-container">
              <Cart cart = {cart}>
                <button onClick = {handlePlaceOrder} className = "main-button">
                  Place Order
                </button>
              </Cart>
           </div>
>>>>>>> 4bcc1d47d2905fa5567e57b813e03a802c14af72
        </div>
    );
};

export default Review;