import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======

>>>>>>> 4bcc1d47d2905fa5567e57b813e03a802c14af72

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
     for(let i = 0; i < cart.length; i++){
        const product = cart[i];
<<<<<<< HEAD
        total = total + product.price;
=======
        total = total + product.price * product.quantity;
        
>>>>>>> 4bcc1d47d2905fa5567e57b813e03a802c14af72
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99
    }

    const tax = (total /10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2)

    const formatNumber = num => {
        const precision = num.toFixed(2)
        return Number(precision)
    }

    return (
        <div>
            <h4>Order summary</h4>
            <p>Items ordered : {cart.length}</p>
             <p>Product price : {formatNumber (total)}</p>
             <p><small>Shipping Cost:{shipping}</small></p>
             <p><small>Tax + Vat :{tax}</small></p>
<<<<<<< HEAD
            <p>Total Price: {}</p>
            <br/>
            <Link to = "/review">
            <button className = "main-button">Review Order</button>
            </Link>
=======
            <p>Total Price: {grandTotal}</p>
            <br/>
            {
                props.children
            }
>>>>>>> 4bcc1d47d2905fa5567e57b813e03a802c14af72

        </div>
    );
};

export default Cart;