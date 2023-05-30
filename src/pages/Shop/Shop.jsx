import React from "react";
import FilterBar from "../../components/FilterBar/FilterBar";
import styles from "./Shop.module.scss";
import Products from "../../components/Products/Products";
import Layout from "../../components/Layout/Layout";
import NoProducts from "../../components/NoProducts/NoProducts";
import { useGetProductsQuery } from "../../store/api/api.slice";
import { useParams, useSearchParams } from "react-router-dom";

const Shop = () => {
    const { product_type: productType } = useParams();
    const [searchParams] = useSearchParams();
    const { data: products, isLoading } = useGetProductsQuery({
        productType,
        search: searchParams.get("s"),
    });

    return (
        <Layout className={styles.main}>
            <FilterBar />
            <Products
                products={products}
                isLoading={isLoading}
                noProductsElement={
                    <NoProducts searchString={searchParams.get("s")} />
                }
            />
        </Layout>
    );
};

export default Shop;
