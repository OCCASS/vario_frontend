import React from 'react';
import FilterBar from "../../components/FilterBar/FilterBar";
import styles from "./Shop.module.scss"
import Products from "../../components/Products/Products";
import Layout from "../../components/Layout/Layout";
import {useGetProductsQuery} from "../../store/api/api.slice";

const Shop = () => {
  const {data: products, isLoading} = useGetProductsQuery()

  return (
    <Layout className={styles.main}>
      <FilterBar/>
      <Products products={products} isLoading={isLoading}/>
    </Layout>
  );
};

export default Shop;
