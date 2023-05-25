import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout/Layout";
import Products from "../../components/Products/Products";
import {useWishlist} from "../../context/wishlistContext";
import {useGetProductsQuery} from "../../store/api/api.slice";
import styles from "./WishList.module.scss"
import {Link} from "react-router-dom";

const WishList = () => {
  const {data, isLoading} = useGetProductsQuery()
  const [products, setProducts] = useState([])
  const {wishlist} = useWishlist()

  useEffect(() => {
    if (!isLoading) {
      setProducts(() => {
        let copy = [...data]
        copy = copy.map(item => {
          return {
            ...item,
            details: item.details.filter(detail => wishlist.includes(detail.id))
          }
        })
        return copy
      })
    }
  }, [data, isLoading, wishlist, setProducts])

  return (
    <Layout>
      <Products
        products={products}
        isLoading={isLoading}
        noProductsElement={
          <div className={styles.empty}>
            <div>Wishlist is empty!</div>
            <div>
              <Link className={styles.empty__link} to={"/shop"}>
                Go shopping
                <svg xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24"
                     strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"/>
                </svg>
              </Link>
            </div>
          </div>
        }
      />
    </Layout>
  )
};

export default WishList;
