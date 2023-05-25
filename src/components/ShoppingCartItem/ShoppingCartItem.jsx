import React, {useEffect, useState} from 'react';
import styles from "./ShoppingCartItem.module.scss"
import {useShoppingCart} from "../../context/shoppingCartContext";
import {useGetProductQuery} from "../../store/api/api.slice";
import CountButton from "../CountButton/CountButton";

const ShoppingCartItem = ({cartItem, className = ""}) => {
  const {increaseItemQuantity, decreaseItemQuantity, removeItem, setItemPrice} = useShoppingCart()
  const {data: product, isLoading} = useGetProductQuery(cartItem.product_id)

  const [detail, setDetail] = useState({})

  useEffect(() => {
    if (!isLoading) {
      setDetail(product?.details.find((d) => d.id === cartItem.id))
      // set item price in cart to latest price data
      const price = product?.price ? product.price : 0
      setItemPrice(cartItem.id, cartItem.size, price)
    }
  }, [isLoading, product, setDetail, cartItem.id, cartItem.size, setItemPrice])

  return (
    <div className={`${styles.cart_item} ${className}`}>
      <div className={styles.cart_item__image}>
        <img src={detail?.images === undefined ? "" : detail?.images[0].url} alt={product?.name}/>
      </div>
      <div className={styles.cart_item__content}>
        <div className={styles.header}>
          <div className={styles.header__name}>
            <div className={styles.title}>{product?.brand}</div>
            <div className={styles.subtitle}>{product?.name}</div>
          </div>
          <div className={styles.header__button} onClick={() => removeItem(cartItem.id, cartItem.size)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footer__size}>
            size: {cartItem.size}
          </div>
          <div className={styles.footer__bottom}>
            <div className={styles.count}>
              <CountButton
                count={cartItem.quantity}
                decrease={() => decreaseItemQuantity(cartItem.id, cartItem.size)}
                increase={() => increaseItemQuantity(cartItem.id, cartItem.size)}
              />
            </div>
            <div>{product?.price} RUB</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
