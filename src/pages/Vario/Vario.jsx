import React from 'react';
import styles from "./Vario.module.scss"
import {Link} from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const Vario = () => {
  return (
    <Layout className={styles.main} showFooter={false}>
      <div className={styles.main__content}>
        <div className={styles.content__title}>
          DISCOVER LIMITED OUTFITS WITHOUT LIMITATION
        </div>
        <div className={styles.content__main}>
          <div className={styles.main__steps}>
            <div className={styles.steps__icon}>
              <Link to={"/"}>
                <svg viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 23.4413C0 15.9978 2.46851 10.23 7.40552 6.138C12.3968 2.046 19.7752 0 29.5407 0C39.252 0 46.5761 2.046 51.5131 6.138C56.5044 10.23 59 16.1342 59 23.8505V34.3728C59 42.0891 56.5044 47.9933 51.5131 52.0853C46.5761 56.1773 39.252 58.2233 29.5407 58.2233C19.7752 58.2233 12.3968 56.1773 7.40552 52.0853C2.46851 47.9933 0 42.1866 0 34.6651V23.4413ZM48.4207 24.4935C48.4207 20.1677 47.3356 16.7967 45.1655 14.3805C42.9954 11.9642 39.5503 10.4443 34.8303 9.8208V48.4025C39.5503 47.779 42.9954 46.2591 45.1655 43.8428C47.3356 41.4266 48.4207 38.0556 48.4207 33.7298V24.4935ZM10.5793 24.6689V33.7298C10.5793 38.0946 11.6644 41.4656 13.8345 43.8428C16.0046 46.2591 19.4768 47.779 24.251 48.4025V9.8208C19.4768 10.4443 16.0046 11.9642 13.8345 14.3805C11.6644 16.7967 10.5793 20.2262 10.5793 24.6689Z"
                    fill="black"/>
                </svg>
              </Link>
            </div>
            <div className={styles.steps__title}>step 2</div>
            <div className={styles.steps__list}>
              <div className={styles.line} style={{background: "rgba(0, 0, 0, 1)"}}></div>
              <div className={styles.line} style={{background: "rgba(0, 0, 0, 0.52)"}}></div>
              <div className={styles.line} style={{background: "rgba(0, 0, 0, 0.1)"}}></div>
            </div>
          </div>
          <div className={styles.main__description}>
            <div>
              Идеей создания магазина “vario” стала тяжелая <br/>
              доступность брендовых вещей ~ кроссовок & футболок. <br/>
              Мы решаем эту проблему! <br/><br/>
              <b>-----</b> <br/>
              <b>VARIO XXY</b> <br/><br/>
              Вам будет представлен большой выбор ассортимента, который <br/>
              поможет вам подобрать крутой look и заказать его без долгого ожидания. <br/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main__background}>
        <svg className={styles.main__background__image} viewBox="0 0 752 846" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="467.913" cy="315.277" rx="221.615" ry="223.802" transform="rotate(136.94 467.913 315.277)"
                   fill="url(#paint0_radial_5_5871)" fillOpacity="0.23"/>
          <ellipse cx="469.666" cy="507.204" rx="300.346" ry="302.533" transform="rotate(136.94 469.666 507.204)"
                   fill="url(#paint1_radial_5_5871)" fillOpacity="0.23"/>
          <defs>
            <radialGradient id="paint0_radial_5_5871" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(467.913 315.277) rotate(90) scale(223.802 221.615)">
              <stop offset="0.515625"/>
              <stop offset="1" stopColor="#D9D9D9" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="paint1_radial_5_5871" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(469.666 507.204) rotate(90) scale(302.533 300.346)">
              <stop offset="0.515625"/>
              <stop offset="1" stopColor="#D9D9D9" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </Layout>
  );
};

export default Vario;
