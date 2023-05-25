import React from 'react';
import styles from "./Layout.module.scss"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Wrapper from "../Wrapper/Wrapper";

const Layout = ({children, className, backgroundColor = "transparent", showFooter = true, ...otherProps}) => {
  return (
    <div className={styles.content} style={{background: backgroundColor}} {...otherProps}>
      <Wrapper className={className}>
        <Header backgroundColor={backgroundColor}/>
        {children}
      </Wrapper>
      {showFooter && <Footer/>}
    </div>
  );
};

export default Layout;
