import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img,name,seller,price,stock}= props.product;
    return (
        <div className="single-product-container">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small> </p>
                <p>Only: ${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <br/>
                <button 
                    className="Main-Button"
                    onClick={()=>props.handleAddProduct(props.product)}
                    >Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;