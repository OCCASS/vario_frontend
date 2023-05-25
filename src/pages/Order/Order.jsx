import React, {useEffect, useState} from 'react';
import styles from "./Order.module.scss";
import Layout from "../../components/Layout/Layout";
import {useShoppingCart} from "../../context/shoppingCartContext";
import OrderItem from "../../components/OrderItem/OrderItem";

const Order = () => {
  const {cartItems, closeCart} = useShoppingCart()
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    closeCart()
  }, [])

  useEffect(() => {
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    setTotalPrice(total)
  }, [cartItems])

  return <Layout className={styles.main} backgroundColor={"#efefef"}>
    <div className={styles.header}>
      <div className={styles.title}>cart</div>
      <div>pavlov</div>
    </div>
    <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.title}>your order:</div>
        {cartItems.length > 0 ? <>
          <div className={styles.products}>
            {cartItems.map(cartItem => <OrderItem cartItem={cartItem} className={styles.products__item}/>)}
          </div>
          <div className={styles.comment}>
            <textarea placeholder={"Special instructions for seller"}></textarea>
          </div>
        </> : <div>
          No order items
        </div>
        }
      </div>

      <div className={styles.right}>
        <div className={styles.header}>
          <div className={styles.header__price}>
            <span>subtotal:</span>
            <span>{totalPrice} RUB</span>
          </div>
          <div className={styles.header__description}>
            <span className={styles.name}>shipping:</span>
            <span className={styles.value}>shipping & taxes calculated at checkout</span>
          </div>
        </div>
        <div className={styles.footer}>
          <button
            className={`${styles.footer__check_out} ${cartItems.length === 0 ? styles.footer__check_out_inactive : ""}`}>check
            out
          </button>
        </div>
      </div>
    </div>
  </Layout>
}

export default Order;
