import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total= cart.reduce((total, prd)=>total +prd.price,0);
    let shipping = 0;
    if(total>35){
        shipping=0;
    }
    if(total>15){
        shipping =4.99;
    }
    else if(total >0){
        shipping = 12.99;
    }
    const tax = (total/10);
    const grandTotal = (total+shipping + Number(tax)).toFixed(2);
    const formatNumber= num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    
    return (
        <div>
            <h3>this is cart</h3>
                <p>Order Summary:{cart.length}</p>
                <p>Product Price : {formatNumber(total)}</p>
                <p><small>Shipping Cost: {shipping}</small></p>
                <p><small>Tax + Vat :{formatNumber(tax)}</small></p>
                <p>total price : {}</p>
        </div>
    );
};

export default Cart;