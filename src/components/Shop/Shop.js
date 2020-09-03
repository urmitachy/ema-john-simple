import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
<<<<<<< HEAD
import { addToDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {

   const first10 = fakeData.slice(0,10);
   const [products, setProducts] = useState(first10);
    const [cart,setCart] = useState([]);

    const handleAddProduct = (product) =>{
       
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key)
        const count =sameProduct.length;
        addToDatabaseCart (product.key,1);
    }

    return (
        <div className = 'shop-container'>
=======
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart,setCart] = useState([]);

    useEffect(() =>{
        const savedCart = getDatabaseCart()
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map( existingkey => {
            const product = fakeData.find(pd => pd.key === existingkey);
            product.quantity =savedCart[existingkey]
            return product;
        } )
       setCart(previousCart)
    },[])

    const handleAddProduct = (product) =>{
        const toBeaddedKey = product.key
        const sameProduct = cart.find(pd => pd.key === toBeaddedKey)
        let count = 1;
        let newCart;
        if(sameProduct){
            count  = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeaddedKey);
            newCart = [...others,sameProduct]
        }
        else{
            product.quantity = 1;
            newCart = [...cart,product];
        }
        
        setCart(newCart);
         addToDatabaseCart (product.key,count);
    }

    return (
        <div className = 'twin-container'>
>>>>>>> 4bcc1d47d2905fa5567e57b813e03a802c14af72
            <div className="product-container">
            
                {
                   products.map (pd => <Product
                   key = {pd.key}
                   showAddToCart = {true}
                    handleAddProduct = {handleAddProduct}
                    product={pd}>
                         </Product>)
                }
           
            </div>
           <div className="cart-container">
<<<<<<< HEAD
               <Cart cart ={cart}></Cart>
=======
               <Cart cart ={cart}>
               <Link to = "/review">
            <button className = "main-button">Review Order</button>
            </Link>
               </Cart>
>>>>>>> 4bcc1d47d2905fa5567e57b813e03a802c14af72
           </div>
           
        </div>
    );
};

export default Shop;