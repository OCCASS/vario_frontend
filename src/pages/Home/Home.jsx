import React from "react";
import styles from "./Home.module.scss";
import Layout from "../../components/Layout/Layout";
import BackgroundImage from "./BackgroundImage";

const Home = () => {
    return (
        <Layout className={styles.main} showFooter={false}>
            <div className={styles.main__content}>
                <div className={styles.content__steps}>
                    <div className={styles.steps__title}>step 1</div>
                    <div className={styles.steps__list}>
                        <div
                            className={styles.line}
                            style={{ background: "rgba(38, 74, 196, 1)" }}
                        ></div>
                        <div
                            className={styles.line}
                            style={{ background: "rgba(38, 74, 196, 0.52)" }}
                        ></div>
                        <div
                            className={styles.line}
                            style={{ background: "rgba(38, 74, 196, 0.1)" }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className={styles.banner__title}>
                var<span className={styles.banner__title__end}>io</span>
            </div>
            <BackgroundImage className={styles.banner__background__image} />
            <div
                className={`${styles.main__description} ${styles.descriptionOne}`}
            >
                {"vario BRAND/ /2023"} <br />
                {"___"} <br />
                {"// VARIO range is formed from"} <br />
                {"key innovations from well-known sports"} <br />
                {"manufacturers and products from lifestyle brands."} <br />
            </div>
            <div
                className={`${styles.main__description} ${styles.descriptionTwo}`}
            >
                <b>{"vario XXY"}</b> <br />
                {"MULTI-BRAND CLOTHING AND SHOE STORE"} <br />
            </div>
        </Layout>
    );
};

export default Home;
