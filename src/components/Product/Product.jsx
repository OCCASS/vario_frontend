import React from 'react';
import styles from "./Product.module.scss"
import {Link} from "react-router-dom";
import {useWishlist} from "../../context/wishlistContext";

const Product = ({id, product_id, title, subtitle, image, price, className}) => {
  const {addToWishlist, removeFromWishlist, getWishlistItem} = useWishlist()

  const numberWithSpaces = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  const isAddedToWishlist = () => {
    return getWishlistItem(id) !== undefined
  }

  const addSelfToWishlist = () => addToWishlist(id)

  const removeSelfFromWishlist = () => removeFromWishlist(id)

  return (
    <div className={`${styles.main} ${className}`}>
      <div className={styles.image}>
        <Link to={`/product/${product_id}/${id}`}><img src={image} alt={title}/></Link>
      </div>
      <div className={styles.description}>
        <div className={styles.description__title}>
          <Link to={`/product/${product_id}/${id}`}>{title}</Link>
        </div>
        <div className={styles.description__subtitle}>{subtitle}</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer__price}>
          {numberWithSpaces(price)} RUB
        </div>
        <div className={`${styles.footer__wishlist} ${isAddedToWishlist() ? styles.footer__wishlist__active : ""}`}
             onClick={
               isAddedToWishlist() ? removeSelfFromWishlist : addSelfToWishlist
             }>
          <div className={styles.footer__wishlist__content}>
            <div className={styles.content__icon}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
              </svg>
            </div>
            wish list
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
