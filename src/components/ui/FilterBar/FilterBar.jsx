import React from 'react';
import styles from "./FilterBar.module.scss"

const FilterBar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__title}>
        <div className={styles.title}>vario xxy</div>
        <div className={styles.subtitle}>multi-brand shoes store</div>
      </div>
      <div className={styles.main__sidebar}>
        {/*<ul className={styles.list}>*/}
        {/*  <li className={styles.list__item}>clear all</li>*/}
        {/*  <li className={styles.list__item}>*/}
        {/*    <div className={styles.list__item__icon}>*/}
        {/*      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
        {/*           stroke="currentColor" strokeWidth={1.5}>*/}
        {/*        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>*/}
        {/*      </svg>*/}
        {/*    </div>*/}
        {/*    filter*/}
        {/*  </li>*/}
        {/*  <li className={styles.list__item}>*/}
        {/*    sort*/}
        {/*    <div className={styles.list__item__icon}>*/}
        {/*      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"*/}
        {/*           strokeWidth={1.5}>*/}
        {/*        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>*/}
        {/*      </svg>*/}
        {/*    </div>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </div>
    </div>
  );
};

export default FilterBar;
