import React from "react";
import FilterBar from "../../components/ui/FilterBar/FilterBar";
import styles from "./Shop.module.scss";
import Products from "../../components/shared/Products/Products";
import Layout from "../../components/layout/Layout";
import NoProducts from "../../components/shared/NoProducts/NoProducts";
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
