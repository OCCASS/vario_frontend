import React from 'react';
import styles from "./Footer.module.scss"
import Wrapper from "../Wrapper/Wrapper";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.main}>
      <Wrapper className={styles.main__content}>
        <div className={styles.left}>
          <span className={styles.logo}>var<span className={styles.logo__end}>io</span></span>
          <span className={styles.email}>pavlov.timur556@yandex.ru</span>
          <span className={styles.footer}>vario brand/ /2023</span>
        </div>
        <div className={styles.center}>
          <table>
            <tr>
              <th><Link to={"/shop"}>shop</Link></th>
              <th><Link to={"/vario"}>vario</Link></th>
              <th><Link to={"/"}>main</Link></th>
            </tr>
            <tr>
              <td><Link to={"/shop/clothes"}>clothes</Link></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><Link to={"/shop/shoes"}>shoes</Link></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div className={styles.right}>
          <div className={styles.social}>
            <div className={styles.social__item}>
              <a href={"https://t.me/OCCASS"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
                </svg>
              </a>
            </div>
            <div className={styles.social__item}>
              <a href={"https://t.me/OCCASS"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                  <path d="M89.442,11.418c-12.533,5.19-66.27,27.449-81.118,33.516c-9.958,3.886-4.129,7.529-4.129,7.529s8.5,2.914,15.786,5.1
		c7.286,2.186,11.172-0.243,11.172-0.243l34.244-23.073c12.143-8.257,9.229-1.457,6.315,1.457
		c-6.315,6.315-16.758,16.272-25.501,24.287c-3.886,3.4-1.943,6.315-0.243,7.772c6.315,5.343,23.558,16.272,24.53,17.001
		c5.131,3.632,15.223,8.861,16.758-2.186c0,0,6.072-38.13,6.072-38.13c1.943-12.872,3.886-24.773,4.129-28.173
		C98.185,8.018,89.442,11.418,89.442,11.418z"></path>
                </svg>
              </a>
            </div>
            <div className={styles.social__item}>
              <a href={"https://t.me/OCCASS"}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                  <path
                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.title}>ПОДПИСЫВАЙТЕСЬ НА НАШУ НОВОСТНУЮ РАССЫЛКУ</div>
          <div className={styles.subtitle}>~ эксклюзивные предложения и превью новостей бренда</div>
          <div className={styles.subscribe}>
            <input type="email" className={styles.subscribe__input} placeholder={"email"}/>
            <button className={styles.subscribe__button}>подписаться</button>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
