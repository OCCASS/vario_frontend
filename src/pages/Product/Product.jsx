import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout/Layout";
import styles from "./Product.module.scss"
import ActualProducts from "../../components/ActualProducts/ActualProducts";
import Slider from "../../components/Slider/Slider";
import {useShoppingCart} from "../../context/shoppingCartContext";
import {Link, useParams} from "react-router-dom";
import {useGetProductQuery} from "../../store/api/api.slice";
import {useWishlist} from "../../context/wishlistContext";

const Product = () => {
  const {product_id, id} = useParams()
  const {addToCart, getItemQuantity} = useShoppingCart()
  const {addToWishlist, getWishlistItem, removeFromWishlist} = useWishlist()
  const {data: product, isLoading} = useGetProductQuery(product_id)

  const [detail, setDetail] = useState({})
  const [sizes, setSizes] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(null)


  const numberWithSpaces = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  const isAddedToCart = () => {
    return getItemQuantity(parseInt(id), sizes[selectedSizeIndex]?.value) > 0
  }

  const isAddedToWishlist = () => {
    return getWishlistItem(parseInt(id)) !== undefined
  }

  const removeSelfFromWishlist = () => removeFromWishlist(parseInt(id))

  const addSelfToCart = () => {
    if (selectedSizeIndex !== null && !isAddedToCart()) {
      addToCart({
        product_id, id: parseInt(id), quantity: 1, size: sizes[selectedSizeIndex].value
      })
    }
  }

  const addSelfToWishlist = () => addToWishlist(parseInt(id))

  // if user going to another page of the product (ex. set item color) reset slider and selected size
  useEffect(() => {
    setSelectedSizeIndex(null)
    setCurrentSlide(0)
  }, [id])

  useEffect(() => {
    if (!isLoading) {
      const d = product.details.find((d) => d.id.toString() === id)
      setDetail(d)
      setSizes([...d?.sizes]?.sort((a, b) => parseFloat(a.value) - parseFloat(b.value)))
    }
  }, [isLoading, product, id])

  return (<Layout className={styles.main}>
    <div className={styles.main__main_content}>
      <Slider
        images={detail?.images === undefined ? [] : detail?.images.map((value) => value.url)}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      <div className={styles.content}>
        <div className={styles.content__info}>
          <div className={styles.info__name}>
            <div className={styles.name__title}>{isLoading ? "" : product.brand}</div>
            <div className={styles.name__subtitle}>{isLoading ? "" : product.name}</div>
          </div>
          <div className={styles.info__price}>{isLoading ? "" : `${numberWithSpaces(product.price)} RUB`}</div>
        </div>
        <div className={styles.content__select_color}>
          {isLoading ? "" : product?.details?.map((value, index) => <div className={styles.select_item} key={index}>
            <Link to={`/product/${product_id}/${value.id}`}>
              <div className={styles.select_item__image}>
                <img src={value.images[0].url} alt={value.name}/>
              </div>
              <div className={styles.select_item__name}>{value.name}</div>
            </Link>
          </div>)}
        </div>
        <div className={styles.content__select_size}>
          <div className={styles.select_size__header}>
            <div className={styles.header__title}>size</div>
            <div className={styles.header__size_guide}>size guide</div>
          </div>
          <div className={styles.select_size__buttons}>
            {sizes.map((size, index) => <div
              key={index}
              className={`${styles.button} ${index === selectedSizeIndex ? styles.button_active : ""}`}
              onClick={() => setSelectedSizeIndex((prevState) => {
                if (prevState === null) return index
                else if (prevState === index) return null
                else return index
              })}
            >
              {size.value}
            </div>)}
          </div>
        </div>
        <div className={styles.content__buttons}>
          <div
            className={`${styles.button__add_to_cart} ${isAddedToCart() ? styles.button__active : ""}`}
            onClick={addSelfToCart}>
            add to cart
          </div>
          <div
            className={`${styles.button__add_to_wishlist} ${isAddedToWishlist() ? styles.button__active : ""}`}
            onClick={isAddedToWishlist() ? removeSelfFromWishlist : addSelfToWishlist}>
            <span className={styles.button__content}>wishlist</span>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.main__description}>
      <div className={styles.description__block1}>
        <div className={styles.measurements}>
          <div className={styles.header}>
            <div className={styles.header__title}>Measurements</div>
            <div>Product measurements for size (UK)</div>
          </div>
          <div className={styles.sizes}>
            <table>
              <tr>
                <td>circumference</td>
                <td className={styles.size}>{detail.description?.measurements?.circumference} cm</td>
              </tr>
              <tr>
                <td>heel</td>
                <td className={styles.size}>{detail.description?.measurements?.heel} cm</td>
              </tr>
              <tr>
                <td>height</td>
                <td className={styles.size}>{detail.description?.measurements?.height} cm</td>
              </tr>
              <tr>
                <td>sole height</td>
                <td className={styles.size}>{detail.description?.measurements?.sole_height} cm</td>
              </tr>
            </table>
          </div>
        </div>
        <div className={styles.title}>vario xxy</div>
        <div className={styles.payment_description}>
          <div className={styles.payment_description__title}>оплата</div>
          <div className={styles.payment_description__subtitle}>Мы принимаем оплату всеми основными кредитными
            картами, Apple Pay и PayPal.
          </div>
          <div className={styles.payment_description__icons}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.732 141.732">
              <path fill="rgb(213, 213, 213)"
                    d="M62.935 89.571h-9.733l6.083-37.384h9.734zM45.014 52.187L35.735 77.9l-1.098-5.537.001.002-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s4.691.976 10.181 4.273l8.456 32.479h10.141l15.485-37.385H45.014zM121.569 89.571h8.937l-7.792-37.385h-7.824c-3.613 0-4.493 2.786-4.493 2.786L95.881 89.571h10.146l2.029-5.553h12.373l1.14 5.553zm-10.71-13.224l5.114-13.99 2.877 13.99h-7.991zM96.642 61.177l1.389-8.028s-4.286-1.63-8.754-1.63c-4.83 0-16.3 2.111-16.3 12.376 0 9.658 13.462 9.778 13.462 14.851s-12.075 4.164-16.06.965l-1.447 8.394s4.346 2.111 10.986 2.111c6.642 0 16.662-3.439 16.662-12.799 0-9.72-13.583-10.625-13.583-14.851.001-4.227 9.48-3.684 13.645-1.389z"></path>
              <path fill="rgb(233, 233, 233)"
                    d="M34.638 72.364l-3.275-16.812s-.396-3.366-4.617-3.366h-15.34l-.18.633s7.373 1.528 14.445 7.253c6.762 5.472 8.967 12.292 8.967 12.292z"></path>
              <path fill="none" d="M0 0h141.732v141.732H0z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.756 192.756">
              <g fillRule="evenodd" clipRule="evenodd">
                <path fill="rgb(216, 216, 216)"
                      d="M96.42 133.041c8.667 7.986 20.306 12.83 32.966 12.83 27.189 0 49.195-22.176 49.195-49.451 0-27.358-22.006-49.535-49.195-49.535-12.66 0-24.299 4.843-32.966 12.83-9.941 9.091-16.229 22.176-16.229 36.705.001 14.529 6.288 27.615 16.229 36.621z"></path>
                <path fill="rgb(205, 205, 205)"
                      d="M112.309 91.153c-.17-1.784-.51-3.483-.85-5.268H81.381c.34-1.784.85-3.483 1.359-5.183h27.275a56.916 56.916 0 0 0-2.039-5.268H84.865a62.38 62.38 0 0 1 2.804-5.268h17.419a44.706 44.706 0 0 0-3.738-5.183h-9.942a48.87 48.87 0 0 1 5.013-5.268c-8.751-7.902-20.307-12.83-33.052-12.83-27.104 0-49.195 22.177-49.195 49.535 0 27.275 22.091 49.451 49.195 49.451 12.745 0 24.3-4.844 33.052-12.83a47.105 47.105 0 0 0 4.929-5.184h-9.942c-1.36-1.699-2.549-3.398-3.739-5.268h17.419a39.517 39.517 0 0 0 2.889-5.268H84.865c-.765-1.699-1.529-3.398-2.125-5.184h27.275c.594-1.699 1.02-3.482 1.443-5.268.34-1.699.68-3.482.85-5.268a51.61 51.61 0 0 0 .256-5.184c0-1.781-.085-3.565-.255-5.264z"></path>
                <path fill="#fff"
                      d="M172.041 107.891c0-.934.68-1.613 1.529-1.613.934 0 1.613.68 1.613 1.613 0 .85-.68 1.615-1.613 1.615-.849 0-1.529-.766-1.529-1.615zm1.529 1.189c.68 0 1.273-.51 1.273-1.189s-.594-1.189-1.273-1.189c-.596 0-1.189.51-1.189 1.189s.594 1.189 1.189 1.189zm-.17-.51h-.34v-1.359H173.994c.17.086.17.256.17.426 0 .084-.084.254-.254.34l.34.594h-.426l-.17-.51h-.254v.509-.764h.17c.084 0 .17 0 .17-.086.084 0 .084-.084.084-.17 0 0 0-.084-.084-.084 0-.086-.086 0-.17 0h-.17v1.104z"></path>
                <path fill="#fff"
                      d="M128.963 85.035l-.936 5.438c-1.869-.935-3.229-1.359-4.758-1.359-3.994 0-6.797 3.908-6.797 9.431 0 3.824 1.869 6.117 5.014 6.117 1.273 0 2.803-.424 4.502-1.273l-.934 5.691c-1.955.51-3.229.766-4.674.766-5.777 0-9.346-4.164-9.346-10.875 0-8.922 4.928-15.21 11.98-15.21.934 0 1.783.085 2.463.255l2.125.51c.681.255.851.34 1.361.509zM111.799 88.774h-.51c-1.783 0-2.803.85-4.418 3.313l.51-3.144h-4.844l-3.312 20.392h5.354c1.953-12.49 2.463-14.614 5.012-14.614h.34c.51-2.464 1.189-4.249 2.039-5.863l-.171-.084zM81.042 109.08c-1.444.51-2.634.68-3.823.68-2.719 0-4.249-1.529-4.249-4.502 0-.51.085-1.189.17-1.785l.34-2.039.255-1.613 2.294-13.936h5.268l-.595 3.059h2.719l-.68 5.013h-2.719l-1.444 8.497c-.085.34-.085.596-.085.85 0 1.02.51 1.445 1.784 1.445.595 0 1.104 0 1.444-.17l-.679 4.501zM60.565 95.401c0 2.55 1.189 4.333 3.993 5.693 2.209 1.02 2.549 1.359 2.549 2.209 0 1.275-.935 1.869-3.059 1.869-1.614 0-3.059-.254-4.758-.764l-.765 4.672.255.086.935.17c.339.084.765.17 1.444.17 1.189.17 2.209.17 2.889.17 5.607 0 8.242-2.125 8.242-6.797 0-2.805-1.104-4.42-3.738-5.693-2.294-1.02-2.549-1.274-2.549-2.209 0-1.104.935-1.614 2.634-1.614 1.02 0 2.464.085 3.824.255l.764-4.673c-1.359-.255-3.483-.425-4.673-.425-5.948-.001-8.072 3.143-7.987 6.881zM169.662 109.336h-5.014l.256-1.955c-1.445 1.529-2.975 2.209-4.93 2.209-3.908 0-6.457-3.312-6.457-8.41 0-6.798 3.994-12.576 8.666-12.576 2.125 0 3.654.935 5.1 2.804l1.189-7.137h5.268l-4.078 25.065zm-7.818-4.758c2.465 0 4.164-2.889 4.164-6.883 0-2.634-.936-3.994-2.805-3.994-2.379 0-4.162 2.804-4.162 6.798 0 2.72.934 4.079 2.803 4.079zM97.355 108.91c-1.87.596-3.569.85-5.523.85-5.948 0-9.007-3.143-9.007-9.176 0-6.967 3.909-12.15 9.262-12.15 4.418 0 7.221 2.889 7.221 7.392 0 1.53-.17 2.975-.68 5.098H88.094c-.085.256-.085.426-.085.596 0 2.379 1.615 3.568 4.673 3.568 1.954 0 3.653-.34 5.523-1.275l-.85 5.097zm-2.974-12.15v-1.019c0-1.699-.935-2.634-2.549-2.634-1.699 0-2.889 1.275-3.399 3.653h5.948zM40.258 109.336H34.99l3.059-19.288-6.882 19.288h-3.654l-.425-19.118-3.228 19.118h-4.928l4.163-25.065h7.647l.255 15.549 5.097-15.549h8.327l-4.163 25.065zM53.428 100.244c-.51 0-.765-.084-1.19-.084-2.974 0-4.503 1.104-4.503 3.143 0 1.275.68 2.039 1.869 2.039 2.209 0 3.739-2.039 3.824-5.098zm3.908 9.092h-4.419l.085-2.125c-1.36 1.699-3.144 2.465-5.608 2.465-2.889 0-4.843-2.209-4.843-5.523 0-5.012 3.398-7.901 9.346-7.901.595 0 1.36.085 2.209.169.17-.679.17-.934.17-1.274 0-1.359-.935-1.869-3.399-1.869-1.529 0-3.229.17-4.418.51l-.765.255-.51.085.765-4.588c2.634-.765 4.418-1.02 6.373-1.02 4.588 0 7.052 2.039 7.052 5.947 0 1.02-.085 1.785-.425 4.079l-1.19 7.223-.17 1.273-.085 1.02-.085.766-.083.508zM137.545 100.244c-.596 0-.85-.084-1.189-.084-3.059 0-4.59 1.104-4.59 3.143 0 1.275.766 2.039 1.955 2.039 2.125 0 3.738-2.039 3.824-5.098zm3.908 9.092h-4.418l.084-2.125c-1.359 1.699-3.143 2.465-5.607 2.465-2.889 0-4.844-2.209-4.844-5.523 0-5.012 3.398-7.901 9.346-7.901.596 0 1.361.085 2.125.169.17-.679.256-.934.256-1.274 0-1.359-.936-1.869-3.398-1.869-1.531 0-3.314.17-4.504.51l-.68.255-.51.085.764-4.588c2.635-.765 4.418-1.02 6.373-1.02 4.588 0 6.967 2.039 6.967 5.947 0 1.02 0 1.785-.424 4.079l-1.105 7.223-.17 1.273-.17 1.02-.084.766v.508h-.001zM155.727 88.774h-.51c-1.783 0-2.803.85-4.418 3.313l.51-3.144h-4.844l-3.229 20.392h5.268c1.955-12.49 2.465-14.614 5.014-14.614h.34c.51-2.464 1.189-4.249 2.039-5.863l-.17-.084z"></path>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                 viewBox="70 0 240 100">
              <g transform="matrix(2 0 0 -2.07675 -11.153 92.77)">
                <g clipPath="url(#b)">
                  <path fill="rgb(209, 209, 209)"
                        d="M117.331 26.863c-.424-2.784-2.55-2.784-4.606-2.784h-1.17l.821 5.198c.05.314.32.545.638.545h.537c1.4 0 2.722 0 3.404-.797.407-.477.53-1.185.376-2.162m-.895 7.264h-7.756a1.08 1.08 0 0 1-1.066-.91L104.48 13.33a.647.647 0 0 1 .638-.747h3.98c.371 0 .687.27.745.636l.89 5.64c.082.523.534.91 1.064.91h2.454c5.11 0 8.058 2.471 8.828 7.372.347 2.142.014 3.826-.989 5.005-1.103 1.296-3.058 1.982-5.653 1.982"></path>
                  <path fill="rgb(192, 192, 192)"
                        d="M62.011 26.863c-.424-2.784-2.55-2.784-4.607-2.784h-1.17l.821 5.198c.05.314.32.545.638.545h.537c1.4 0 2.722 0 3.404-.797.408-.477.531-1.185.377-2.162m-.895 7.264H53.36c-.53 0-.982-.386-1.065-.91L49.16 13.33a.646.646 0 0 1 .638-.747h3.704c.53 0 .981.386 1.064.91l.847 5.365c.082.524.534.91 1.064.91h2.454c5.11 0 8.058 2.472 8.828 7.373.347 2.142.014 3.826-.989 5.005-1.103 1.296-3.058 1.982-5.653 1.982M79.123 19.723c-.36-2.122-2.043-3.547-4.192-3.547-1.077 0-1.94.347-2.494 1.003-.55.65-.756 1.577-.582 2.608.334 2.104 2.046 3.574 4.162 3.574 1.055 0 1.91-.35 2.476-1.012.569-.667.793-1.599.63-2.626m5.176 7.23h-3.714a.647.647 0 0 1-.64-.547l-.162-1.038-.26.376c-.804 1.167-2.597 1.558-4.387 1.558-4.103 0-7.608-3.11-8.29-7.47-.355-2.177.149-4.256 1.383-5.707 1.133-1.333 2.75-1.888 4.677-1.888 3.308 0 5.142 2.124 5.142 2.124l-.166-1.032a.646.646 0 0 1 .639-.747h3.344c.53 0 .982.385 1.065.91l2.008 12.713a.647.647 0 0 1-.64.747"></path>
                  <path fill="rgb(209, 209, 209)"
                        d="M134.443 19.723c-.36-2.122-2.043-3.547-4.192-3.547-1.077 0-1.94.347-2.494 1.003-.55.65-.756 1.577-.582 2.608.334 2.104 2.045 3.574 4.162 3.574 1.055 0 1.91-.35 2.476-1.012.569-.667.793-1.599.63-2.626m5.176 7.23h-3.714a.647.647 0 0 1-.64-.547l-.162-1.038-.26.376c-.804 1.167-2.597 1.558-4.387 1.558-4.102 0-7.607-3.11-8.29-7.47-.355-2.177.15-4.256 1.384-5.707 1.133-1.333 2.75-1.888 4.677-1.888 3.309 0 5.143 2.124 5.143 2.124l-.166-1.032a.644.644 0 0 1 .637-.747h3.343c.53 0 .982.385 1.066.91l2.008 12.713a.647.647 0 0 1-.64.747"></path>
                  <path fill="rgb(192, 192, 192)"
                        d="M104.08 26.952h-3.734c-.357 0-.69-.177-.89-.473l-5.15-7.584-2.183 7.288a1.08 1.08 0 0 1-1.033.77h-3.669a.647.647 0 0 1-.612-.856l4.11-12.066-3.866-5.455a.647.647 0 0 1 .528-1.02h3.73c.352 0 .683.173.885.463l12.414 17.918a.646.646 0 0 1-.53 1.015"></path>
                  <path fill="rgb(209, 209, 209)"
                        d="M143.996 33.58l-3.184-20.251a.647.647 0 0 1 .639-.747h3.201c.53 0 .982.386 1.065.91l3.139 19.888a.646.646 0 0 1-.639.747h-3.582a.645.645 0 0 1-.639-.546"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.description__logo}>
        <div className={styles.logo__image}>
          <svg viewBox="0 0 352 361" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="119.696" cy="239.785" rx="119.696" ry="120.877" fill="url(#paint0_radial_5_7020)"
                     fillOpacity="0.23"/>
            <ellipse cx="189.781" cy="163.4" rx="162.219" ry="163.4" fill="url(#paint1_radial_5_7020)"
                     fillOpacity="0.23"/>
            <defs>
              <radialGradient id="paint0_radial_5_7020" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(119.696 239.785) rotate(90) scale(120.877 119.696)">
                <stop offset="0.515625"/>
                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint1_radial_5_7020" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                              gradientTransform="translate(189.781 163.4) rotate(90) scale(163.4 162.219)">
                <stop offset="0.515625"/>
                <stop offset="1" stopColor="#D9D9D9" stopOpacity="0"/>
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
          <div className={styles.description__title}>description:</div>
          <div>
            {detail?.description?.text.split("\r\n").map((value, index) => <p key={index}>{value}</p>)}
          </div>
        </div>
        <div className={styles.composition}>
          <div className={styles.composition__title}>composition</div>
          <div>
            {detail?.description?.composition.split("\r\n").map((value, index) => <p key={index}>{value}</p>)}
          </div>
        </div>
        <div className={styles.delivery_description}>
          <div className={styles.title}>ДОСТАВКА И ВОЗВРАТ</div>
          <div>Цены на доставку варьируются во время акций и предложений и в зависимости от страны.
            Всю стоимость доставки можно узнать на кассе.
          </div>
        </div>
      </div>
    </div>
    <div className={styles.main__images}>
      <div className={styles.images}>
        {detail?.images?.slice(1).map((value, index) => <img className={styles.images__item} src={value.url}
                                                             alt={value.name} key={index}/>)}
      </div>
    </div>

    <ActualProducts title={"recommend"}/>
  </Layout>);
};

export default Product;
