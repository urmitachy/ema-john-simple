import React from 'react';

const ReviewItem = (props) => {
<<<<<<< HEAD
   
    const {name, quantity,key} = props.product;
=======
    
   
    const {name, quantity,key,price} = props.product;
>>>>>>> 4bcc1d47d2905fa5567e57b813e03a802c14af72
    const ReviewItemStyle ={
        borderBottom : "1px solid lightgray",
        marginBottom :"5px",
        paddingBottom : "5px",
        marginLeft :"200px"

    }
    return (
     <div style = {ReviewItemStyle} className = "review-item">
        <h4 className = "product-name">{name}</h4>
        <p>Quantity : {quantity}</p>
<<<<<<< HEAD
         <br/>
         <button 
            className = "main-button"
            onClick = {() => props.removeProduct(key)}
            >Remove</button>   
=======
        <p><small>${price}</small></p>
        
         <br/>
            <button 
            className = "main-button"
            onClick = { () => props.removeProduct(key)}
            >Remove
            </button> 
>>>>>>> 4bcc1d47d2905fa5567e57b813e03a802c14af72
    </div>
    );
};

export default ReviewItem;