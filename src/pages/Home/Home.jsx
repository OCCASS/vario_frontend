import React from 'react';
import styles from "./Home.module.scss"
import Layout from "../../components/Layout/Layout";

const Home = () => {
  return (
    <Layout className={styles.main} showFooter={false}>
      <div className={styles.main__content}>
        <div className={styles.content__steps}>
          <div className={styles.steps__title}>step 1</div>
          <div className={styles.steps__list}>
            <div className={styles.line} style={{background: "rgba(38, 74, 196, 1)"}}></div>
            <div className={styles.line} style={{background: "rgba(38, 74, 196, 0.52)"}}></div>
            <div className={styles.line} style={{background: "rgba(38, 74, 196, 0.1)"}}></div>
          </div>
        </div>
      </div>
      <div className={styles.banner__title}>var<span className={styles.banner__title__end}>io</span></div>
      <div className={styles.banner__background}>
        <svg className={styles.banner__background__image} viewBox="0 0 1512 982" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="595.849" cy="490.869" rx="595.849" ry="603.869" fill="url(#paint0_radial_5_5822)"/>
          <ellipse cx="920.619" cy="422.74" rx="259.729" ry="263.225" fill="url(#paint1_radial_5_5822)"/>
          <g filter="url(#filter0_f_5_5822)">
            <ellipse cx="303.381" cy="255.262" rx="303.381" ry="255.262" transform="matrix(-1 0 0 1 1224 304.621)"
                     fill="url(#paint2_linear_5_5822)"/>
          </g>
          <defs>
            <filter id="filter0_f_5_5822" x="317.238" y="4.62109" width="1206.76" height="1110.52"
                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_5_5822"/>
            </filter>
            <radialGradient id="paint0_radial_5_5822" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(595.849 490.869) rotate(90) scale(603.869 595.849)">
              <stop offset="0.307292" stopColor="#284FC6"/>
              <stop offset="1" stopColor="#D9D9D9" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="paint1_radial_5_5822" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(920.619 422.74) rotate(90) scale(263.225 259.729)">
              <stop offset="0.515625" stopColor="#284FC6"/>
              <stop offset="1" stopColor="#D9D9D9" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="paint2_linear_5_5822" x1="303.381" y1="0" x2="303.381" y2="510.524"
                            gradientUnits="userSpaceOnUse">
              <stop offset="0.791667" stopColor="#1A55E3" stopOpacity="0.16"/>
              <stop offset="1" stopColor="#1C4EE7" stopOpacity="0.46"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={`${styles.main__description} ${styles.descriptionOne}`}>
        vario BRAND/ /2023 <br/>
        ___ <br/>
        // VARIO range is formed from <br/>
        key innovations from well-known sports <br/>
        manufacturers and products from lifestyle brands. <br/>
      </div>
      <div className={`${styles.main__description} ${styles.descriptionTwo}`}>
        <b>vario XXY</b> <br/>
        MULTI-BRAND CLOTHING AND SHOE STORE <br/>
      </div>
    </Layout>
  );
};

export default Home;
