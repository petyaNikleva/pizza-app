import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import styles from './Cart.module.css';

import { AppStateContext } from '../AppState';

interface Props { }

interface State {
    isOpen: boolean;
}

let q = 0;

class Cart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        };

    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e.target); // html element -> e target colud be span of text or image of cart
        console.log(e.currentTarget); // html element -> onclick is related to currTarget
        this.setState((prevState) => ({ isOpen: !prevState.isOpen })
        )
    }

    // Here how to use context in class component


    render() {
        return (
            <AppStateContext.Consumer>{(state) => {
                return (
                    <div className={styles.cartContainer}>
                        <button className={styles.button} type='button'
                            onClick={this.handleClick}>
                            <FiShoppingCart />
                            <span>{state.cart.items.reduce(
                                (quantity, item) => item.quantity + quantity,
                                0
                            )
                            } pizza(s)</span>
                        </button>
                        <div className={styles.cartDropDown}
                            style={{
                                display: this.state.isOpen ? 'block' : 'none'
                            }}>
                            <ul>
                                {state.cart.items.map(item => {
                                    return <li key={item.id}>{item.name} &times; {item.quantity} </li>
                                })}
                            </ul>
                        </div>
                    </div>
                )
            }}
            </AppStateContext.Consumer>
        )
    }
}

export default Cart;