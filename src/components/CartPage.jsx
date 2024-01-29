import React from 'react';
import {useSelector} from "react-redux";

function CartPage() {
    const cart = useSelector(state => state)

    return (
        <ul>
            {cart.products.map(product => (
                <li key={product._id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Цена: {product.price}</p>
                </li>
            ))}
        </ul>
    );
}

export default CartPage;