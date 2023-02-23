import React from 'react';

import styles from './Pizza.module.css';

import { useSetState } from './AppState';

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
    const setState = useSetState();
    const handleAddToCartClick = () => {
        setState((state) => {
            const itemExists = state.cart.items.find(item => item.id === pizza.id);
            return {
                ...state, cart: {
                    ...state.cart,
                    items: itemExists? state.cart.items.map(item => {
                        if (item.id === pizza.id) {
                            return {...item, quantity: item.quantity + 1}
                        }
                        return item;
                    }) 
                    : [
                        ...state.cart.items, 
                        { id: pizza.id, name: pizza.name, price: pizza.price, quantity: 1 }
                    ]
                }
            };
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