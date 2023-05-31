import React from 'react';
import styles from "./CountButton.module.scss"

const CountButton = ({count, increase, decrease}) => {
  return (
    <div className={styles.main}>
      <div className={`${styles.count__button} ${count === 1 ? styles.inactive : ""}`}
           onClick={decrease}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}
             stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15"/>
        </svg>
      </div>
      <div className={styles.count__value}>{count}</div>
      <div className={styles.count__button} onClick={increase}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}
             stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
        </svg>
      </div>
    </div>
  )
    ;
};

export default CountButton;
