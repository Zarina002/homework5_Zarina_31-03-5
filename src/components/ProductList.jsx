import React, { useState } from 'react';
import products from '../data/products.json';
import '../styles.css';
import {useDispatch} from "react-redux";

const ProductList = ({countFn}) => {
    const dispatch = useDispatch()

    const handleBuyClick = (product) => {
        countFn()
        dispatch({type: "ADD_PRODUCT", payload: product})
    };



    return (
        <div>

            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Цена: {product.price}</p>
                        <button onClick={()=>{handleBuyClick(product)}}>Купить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;