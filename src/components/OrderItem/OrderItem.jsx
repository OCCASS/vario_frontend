import React, {useEffect, useState} from 'react';
import {useGetProductQuery} from "../../store/api/api.slice";
import styles from "./OrderItem.module.scss"
import {useShoppingCart} from "../../context/shoppingCartContext";
import CountButton from "../CountButton/CountButton";

const OrderItem = ({cartItem, className}) => {
  const {increaseItemQuantity, decreaseItemQuantity, removeItem} = useShoppingCart()
  const {data: product, isLoading} = useGetProductQuery(cartItem.product_id)

  const [detail, setDetail] = useState({})

  useEffect(() => {
    if (!isLoading) {
      setDetail(product?.details.find((d) => d.id === cartItem.id))
    }
  }, [isLoading, product, setDetail, cartItem.id])

  return (
    <div className={`${styles.main} ${className}`}>
      <div className={styles.image}>
        <img src={detail?.images === undefined ? "" : detail?.images[0].url} alt={product?.name}/>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>{product?.brand}</div>
          <div>{product?.name}</div>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>size: {cartItem.size}</div>
          <div className={styles.center}>
            <CountButton
              count={cartItem.quantity}
              decrease={() => decreaseItemQuantity(cartItem.id, cartItem.size)}
              increase={() => increaseItemQuantity(cartItem.id, cartItem.size)}
            />
          </div>
          <div className={styles.right}>
            {cartItem.price} RUB
            <div className={styles.remove_button} onClick={() => removeItem(cartItem.id, cartItem.size)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          {cartItem.quantity * cartItem.price} RUB
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
