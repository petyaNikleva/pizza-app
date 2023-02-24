import React from 'react';

import styles from './Pizza.module.css';

import { useStateDispatch } from './AppState';

interface PizzaP {
    id: number;
    name: string;
    description: string;
    price: number
}

interface Props {
    pizza: PizzaP;
}

const Pizza: React.FC<Props> = ({ pizza }) => {
    const dispatch = useStateDispatch();
    const handleAddToCartClick = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                item: {
                    id: pizza.id,
                    name: pizza.name,
                    price: pizza.price,
                }
            }
        });
    };
    return <li className={styles.container}>
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>{pizza.price}</p>
        <button onClick={handleAddToCartClick}>Add to cart</button>
    </li>
}
export default Pizza;