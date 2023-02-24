import React, { createRef } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import styles from './Cart.module.css';

import { AppStateContext } from '../AppState';

interface Props { }

interface State {
    isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
    #containerRef: React.RefObject<HTMLDivElement>
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        };

        this.#containerRef = createRef();

    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e.target); // html element -> e target colud be span of text or image of cart
        console.log(e.currentTarget); // html element -> onclick is related to currTarget
        this.setState((prevState) => ({ isOpen: !prevState.isOpen })
        )
    }
    // Here how to use context in class component

    handleOutSideClick = (e: MouseEvent) => {
        if (this.#containerRef.current && !this.#containerRef.current.contains(e.target as Node))
        this.setState({ isOpen: false });
    }

    componentDidMount(): void {
        document.addEventListener('mousedown', this.handleOutSideClick)
    }

    componentWillUnmount(): void {
        document.removeEventListener('mousedown', this.handleOutSideClick)
    }

    render() {
        return (
            <AppStateContext.Consumer>{(state) => {
                const itemCounts = state.cart.items.reduce(
                    (sum, item) => sum + item.quantity,
                    0
                )
                return (
                    <div className={styles.cartContainer} ref={this.#containerRef}>
                        <button className={styles.button} type='button'
                            onClick={this.handleClick}>
                            <FiShoppingCart />
                            <span>{itemCounts} pizza(s)</span>
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