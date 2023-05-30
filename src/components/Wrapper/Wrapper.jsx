import React from "react";
import styles from "./Wrapper.module.scss";

const Wrapper = ({ children, className = "", ...otherProps }) => {
    return (
        <div className={`${styles.wrapper} ${className}`} {...otherProps}>
            {children}
        </div>
    );
};

export default Wrapper;
