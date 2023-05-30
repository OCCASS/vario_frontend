import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./Product.module.scss";
import ActualProducts from "../../components/ActualProducts/ActualProducts";
import Slider from "../../components/Slider/Slider";
import PaymentDescription from "./PaymentDescription";
import { Link, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../store/api/api.slice";
import { useWishlist } from "../../context/wishlistContext";

const Product = () => {
    const { product_id, id } = useParams();
    const { addToWishlist, getWishlistItem, removeFromWishlist } =
        useWishlist();
    const { data: product, isLoading } = useGetProductQuery(product_id);

    const [detail, setDetail] = useState({});
    const [sizes, setSizes] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);

    const numberWithSpaces = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    const isAddedToWishlist = () => {
        return getWishlistItem(parseInt(id)) !== undefined;
    };

    const removeSelfFromWishlist = () => removeFromWishlist(parseInt(id));

    const addSelfToWishlist = () => addToWishlist(parseInt(id));

    // if user going to another page of the product (ex. set item color) reset slider and selected size
    useEffect(() => {
        setSelectedSizeIndex(null);
        setCurrentSlide(0);
    }, [id]);

    useEffect(() => {
        if (!isLoading) {
            const d = product.details.find((d) => d.id.toString() === id);
            setDetail(d);
            setSizes(
                [...d?.sizes]?.sort(
                    (a, b) => parseFloat(a.value) - parseFloat(b.value)
                )
            );
        }
    }, [isLoading, product, id]);

    return (
        <Layout className={styles.main}>
            <div className={styles.main__main_content}>
                <Slider
                    images={
                        detail?.images === undefined
                            ? []
                            : detail?.images.map((value) => value.url)
                    }
                    currentSlide={currentSlide}
                    setCurrentSlide={setCurrentSlide}
                    className={styles.images_slider}
                />
                <div className={styles.content}>
                    <div className={styles.content__info}>
                        <div className={styles.info__name}>
                            <div className={styles.name__title}>
                                {isLoading ? "" : product.brand}
                            </div>
                            <div className={styles.name__subtitle}>
                                {isLoading ? "" : product.name}
                            </div>
                        </div>
                        <div className={styles.info__price}>
                            {isLoading
                                ? ""
                                : `${numberWithSpaces(product.price)} RUB`}
                        </div>
                    </div>
                    <div className={styles.content__select_color}>
                        {isLoading
                            ? ""
                            : product?.details?.map((value, index) => (
                                  <div
                                      className={styles.select_item}
                                      key={index}
                                  >
                                      <Link
                                          to={`/product/${product_id}/${value.id}`}
                                      >
                                          <div
                                              className={
                                                  styles.select_item__image
                                              }
                                          >
                                              <img
                                                  src={value.images[0].url}
                                                  alt={value.name}
                                              />
                                          </div>
                                          <div
                                              className={
                                                  styles.select_item__name
                                              }
                                          >
                                              {value.name}
                                          </div>
                                      </Link>
                                  </div>
                              ))}
                    </div>
                    <div className={styles.content__select_size}>
                        <div className={styles.select_size__header}>
                            <div className={styles.header__title}>size</div>
                        </div>
                        <div className={styles.select_size__buttons}>
                            {sizes.map((size, index) => (
                                <div
                                    key={index}
                                    className={`${styles.button} ${
                                        index === selectedSizeIndex
                                            ? styles.button_active
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setSelectedSizeIndex((prevState) => {
                                            if (prevState === null)
                                                return index;
                                            else if (prevState === index)
                                                return null;
                                            else return index;
                                        })
                                    }
                                >
                                    {size.value}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.content__buttons}>
                        <div
                            className={`${styles.button__add_to_wishlist} ${
                                isAddedToWishlist() ? styles.button__active : ""
                            }`}
                            onClick={
                                isAddedToWishlist()
                                    ? removeSelfFromWishlist
                                    : addSelfToWishlist
                            }
                        >
                            <span className={styles.button__content}>
                                wishlist
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.main__description}>
                <div className={styles.description__block1}>
                    <div className={styles.measurements}>
                        <div className={styles.header}>
                            <div className={styles.header__title}>
                                Measurements
                            </div>
                            <div>Product measurements for size (UK)</div>
                        </div>
                        <div className={styles.sizes}>
                            <table>
                                <tr>
                                    <td>circumference</td>
                                    <td className={styles.size}>
                                        {
                                            detail.description?.measurements
                                                ?.circumference
                                        }{" "}
                                        cm
                                    </td>
                                </tr>
                                <tr>
                                    <td>heel</td>
                                    <td className={styles.size}>
                                        {detail.description?.measurements?.heel}{" "}
                                        cm
                                    </td>
                                </tr>
                                <tr>
                                    <td>height</td>
                                    <td className={styles.size}>
                                        {
                                            detail.description?.measurements
                                                ?.height
                                        }{" "}
                                        cm
                                    </td>
                                </tr>
                                <tr>
                                    <td>sole height</td>
                                    <td className={styles.size}>
                                        {
                                            detail.description?.measurements
                                                ?.sole_height
                                        }{" "}
                                        cm
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className={styles.title}>vario xxy</div>
                    <PaymentDescription
                        className={styles.payment_description}
                    />
                </div>
                <div className={styles.description__logo}>
                    <div className={styles.logo__image}>
                        <svg
                            viewBox="0 0 352 361"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <ellipse
                                cx="119.696"
                                cy="239.785"
                                rx="119.696"
                                ry="120.877"
                                fill="url(#paint0_radial_5_7020)"
                                fillOpacity="0.23"
                            />
                            <ellipse
                                cx="189.781"
                                cy="163.4"
                                rx="162.219"
                                ry="163.4"
                                fill="url(#paint1_radial_5_7020)"
                                fillOpacity="0.23"
                            />
                            <defs>
                                <radialGradient
                                    id="paint0_radial_5_7020"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(119.696 239.785) rotate(90) scale(120.877 119.696)"
                                >
                                    <stop offset="0.515625" />
                                    <stop
                                        offset="1"
                                        stopColor="#D9D9D9"
                                        stopOpacity="0"
                                    />
                                </radialGradient>
                                <radialGradient
                                    id="paint1_radial_5_7020"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(189.781 163.4) rotate(90) scale(163.4 162.219)"
                                >
                                    <stop offset="0.515625" />
                                    <stop
                                        offset="1"
                                        stopColor="#D9D9D9"
                                        stopOpacity="0"
                                    />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className={styles.logo__text}>
                            var<span className={styles.text__end}>io</span>
                        </div>
                    </div>
                </div>
                <div className={styles.description__block2}>
                    <div className={styles.description}>
                        <div className={styles.description__title}>
                            description:
                        </div>
                        <div>
                            {detail?.description?.text
                                .split("\r\n")
                                .map((value, index) => (
                                    <p key={index}>{value}</p>
                                ))}
                        </div>
                    </div>
                    <div className={styles.composition}>
                        <div className={styles.composition__title}>
                            composition
                        </div>
                        <div>
                            {detail?.description?.composition
                                .split("\r\n")
                                .map((value, index) => (
                                    <p key={index}>{value}</p>
                                ))}
                        </div>
                    </div>
                    <div className={styles.delivery_description}>
                        <div className={styles.title}>ДОСТАВКА И ВОЗВРАТ</div>
                        <div>
                            Цены на доставку варьируются во время акций и
                            предложений и в зависимости от страны. Всю стоимость
                            доставки можно узнать на кассе.
                        </div>
                    </div>
                    <PaymentDescription
                        className={styles.payment_description}
                    />
                </div>
            </div>
            <div className={styles.main__images}>
                <div className={styles.images}>
                    {detail?.images?.slice(1).map((value, index) => (
                        <img
                            className={styles.images__item}
                            src={value.url}
                            alt={value.name}
                            key={index}
                        />
                    ))}
                </div>
            </div>

            <ActualProducts title={"recommend"} />
        </Layout>
    );
};

export default Product;
