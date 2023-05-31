import React from 'react';
import image from "../../../images/image1.png"
import styles from "./ActualProducts.module.scss"
import Product from "../Product/Product";

const ActualProducts = ({title = "multi-brand clothes store"}) => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <Product className={styles.content__col} image={image} title={"visvim"} subtitle={"Bickle G. Cords parka coat"}
                 price={1190}/>
        <Product className={styles.content__col} image={image} title={"visvim"} subtitle={"Bickle G. Cords parka coat"}
                 price={1190}/>
        <Product className={styles.content__col} image={image} title={"visvim"} subtitle={"Bickle G. Cords parka coat"}
                 price={1190}/>
        <Product className={styles.content__col} image={image} title={"visvim"} subtitle={"Bickle G. Cords parka coat"}
                 price={1190}/>
      </div>
    </div>
  );
};

export default ActualProducts;
