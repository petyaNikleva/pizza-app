import React from 'react';
import { useAddToCart } from './AddtoCart';

import styles from './Pizza.module.css';

import { IPizza } from './types';


interface Props {
    pizza: IPizza;
}

const Pizza: React.FC<Props> = ({ pizza }) => {
    const addToCart = useAddToCart();
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

// using HOC --> 
// export default withAddToCart(Pizza);

export default Pizza;
