import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey);
<<<<<<< HEAD
    console.log(product)
=======
    
>>>>>>> 4bcc1d47d2905fa5567e57b813e03a802c14af72
    return (
        <div>
            <h1> {productKey} Detail coming soon</h1>
            <Product showAddToCart = {false} product = {product}></Product>
        </div>
    );
};

export default ProductDetail;