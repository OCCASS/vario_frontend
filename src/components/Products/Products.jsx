import React, {useEffect, useState} from 'react';
import styles from "./Products.module.scss"
import Product from "../Product/Product";
import ActualProducts from "../ActualProducts/ActualProducts";

const Products = ({products, isLoading, noProductsElement = "No data"}) => {
  const [totalCount, setTotalCount] = useState(0)


  useEffect(() => {
    setTotalCount(products?.reduce((total, product) => total + product?.details?.length, 0))
  }, [products, setTotalCount])

  return (
    <div className={styles.main}>
      <div className={styles.main__content}>
        {totalCount > 0 ? isLoading ? "Loading..." : products.map((product) =>
          <>
            {
              product.details.filter((detail) => detail.total_count > 0).map((detail) =>
                <Product
                  key={detail.id}
                  id={detail.id}
                  product_id={product.id}
                  title={product.brand}
                  subtitle={product.name}
                  price={product.price}
                  image={detail.images[0].url}
                />
              )
            }
          </>
        ) : noProductsElement}
      </div>

      <ActualProducts/>

      <div className={styles.see_more}>
        ------see more
        <div className={styles.see_more__icon}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Products;
