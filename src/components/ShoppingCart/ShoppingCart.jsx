import React, {useEffect, useState} from 'react';
import styles from "./ShoppingCart.module.scss"
import ShoppingCartItem from "../ShoppingCartItem/ShoppingCartItem";
import {useShoppingCart} from "../../context/shoppingCartContext";
import {Link} from "react-router-dom";

const ShoppingCart = ({className = ""}) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const {cartItems, closeCart, showCart} = useShoppingCart()

  useEffect(() => {
    document.querySelector("body").classList.add("no_scroll")
  }, [])

  // total price controller
  useEffect(() => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    setTotalPrice(total)
  }, [cartItems])


  const close = () => {
    closeCart()
    document.querySelector("body").classList.remove("no_scroll")
  }

  return (
    <div className={`${styles.container} ${showCart ? "" : styles.closed}`} onClick={close}>
      <div className={`${styles.main} ${className}`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.wrapper}>
            <div className={styles.header__content}>
              <div className={styles.header__icon} onClick={close}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                </svg>
              </div>
              <div className={styles.header__title}>cart</div>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.items}>
              {showCart && cartItems.map((value, index) => <ShoppingCartItem key={index} cartItem={value}/>)}
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.wrapper}>
            <div className={styles.footer__content}>
              <div>subtotal</div>
              <div>{totalPrice} RUB</div>
            </div>
            {cartItems.length > 0 && <div className={styles.footer__buttons}>
              <Link className={styles.button__check_out} to={"/order"}>check out</Link>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
