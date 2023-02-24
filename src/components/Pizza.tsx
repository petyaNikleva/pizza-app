import React from 'react';

import styles from './Pizza.module.css';

import { IPizza } from './types';
import { AddToCartProps, withAddToCart } from './AddtoCart';

interface Props extends AddToCartProps{
    pizza: IPizza;
}

const Pizza: React.FC<Props> = ({ pizza, addToCart }) => {
    const handleAddToCartClick = () => {
        addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });
    };
    return <li className={styles.container}>
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>{pizza.price}</p>
        <button onClick={handleAddToCartClick}>Add to cart</button>
    </li>
}
export default withAddToCart(Pizza);