import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import styles from "./Header.module.scss"
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import {useShoppingCart} from "../../context/shoppingCartContext";

const Header = ({backgroundColor}) => {
  const [search, setSearch] = useState("")

  const {cartItems, openCart} = useShoppingCart()

  return (
    <nav className={styles.header}>
      <ShoppingCart/>

      <div className={styles.left}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <NavLink id={styles.shopLink} to={"/shop"} className={({isActive}) => isActive ? styles.active : ""}>
              shop
              <ul className={styles.listItems} style={{background: backgroundColor}}>
                <li className={styles.listItems__item}><Link to={"/shop/shoes"}>shoes</Link></li>
                <li className={styles.listItems__item}><Link to={"/shop/clothes"}>clothes</Link></li>
              </ul>
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink to={"/vario"} className={({isActive}) => isActive ? styles.active : ""}>vario</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <ul className={styles.list}>
          <li className={styles.list__item} id={styles.search}>
            <div className={styles.search__icon}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
              </svg>
            </div>
            <input type={"text"} onBlur={(e) => {
              setSearch("")
            }} value={search} onChange={(e) => setSearch((e.target.value.toLocaleLowerCase()))}/>
            search
          </li>
          <li className={styles.list__item}>
            <NavLink to={"/wishlist"} className={({isActive}) => isActive ? styles.active : ""}>wishlist</NavLink>
          </li>
          <li className={styles.list__item}>
            <div onClick={openCart}>cart({cartItems.length})</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
