import React, { useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useOutsideClickHandler } from "../../../hooks/useOutsideClickHandler";
import Wrapper from "../Wrapper/Wrapper";
import styles from "./Header.module.scss";
import { observer } from "mobx-react-lite";
import headerStore from "./HeaderStore";

const Header = observer(() => {
    const {
        showShopDropdown,
        hideShopDropdown,
        toggleShopDropdown,
        showNavbar,
        hideNavbar,
        toggleNavbar,
        toggleSearchBar,
        hideSearchBar,
        setShowSearchBar,
        showSearchBar,
        searchString,
        search,
        setSearch,
    } = headerStore;

    const shopLinkRef = useRef(null);

    useOutsideClickHandler(shopLinkRef, () => {
        hideShopDropdown();
    });

    const navigate = useNavigate();
    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            navigate({
                pathname: "/shop/",
                search: searchString.length > 0 ? `?s=${searchString}` : "",
            });
            e.target.blur();
            hideNavbar();
            hideSearchBar();
        } else {
            setShowSearchBar(true);
        }
    };

    const handleSearchButton = (e) => {
        if (showSearchBar && searchString.length > 0) {
            navigate({
                pathname: "/shop/",
                search: searchString.length > 0 ? `?s=${searchString}` : "",
            });
            e.target.blur();
            hideNavbar();
            hideSearchBar();
        } else {
            setShowSearchBar(true);
        }
    };

    return (
        <header className={styles.header}>
            <Wrapper>
                <div className={styles.mobile_button} onClick={toggleNavbar}>
                    --- menu{" "}
                    {showNavbar ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="currentColor"
                            className={styles.mobile_button__icon}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    ) : (
                        ""
                    )}
                </div>
                <nav
                    className={`${styles.nav} ${showNavbar ? styles.show : ""}`}
                >
                    <div className={styles.nav__content}>
                        <div className={styles.left}>
                            <ul className={styles.list}>
                                <li className={styles.list__item}>
                                    <NavLink
                                        id={styles.shop_link}
                                        to={"/shop"}
                                        className={({ isActive }) =>
                                            `${styles.list__item__link} ${
                                                isActive ? styles.active : ""
                                            }`
                                        }
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleShopDropdown();
                                        }}
                                        ref={shopLinkRef}
                                    >
                                        shop
                                    </NavLink>
                                    <ul
                                        id={styles.shop_dropdown}
                                        className={
                                            showShopDropdown ? styles.show : ""
                                        }
                                    >
                                        <li
                                            className={
                                                styles.shop_dropdown__item
                                            }
                                            onClick={hideNavbar}
                                        >
                                            <NavLink
                                                className={({ isActive }) =>
                                                    `${
                                                        isActive
                                                            ? styles.active
                                                            : ""
                                                    } ${
                                                        styles.shop_dropdown__link
                                                    }`
                                                }
                                                to={"/shop/shoes"}
                                            >
                                                shoes
                                            </NavLink>
                                        </li>
                                        <li
                                            className={
                                                styles.shop_dropdown__item
                                            }
                                            onClick={hideNavbar}
                                        >
                                            <NavLink
                                                className={({ isActive }) =>
                                                    `${
                                                        isActive
                                                            ? styles.active
                                                            : ""
                                                    } ${
                                                        styles.shop_dropdown__link
                                                    }`
                                                }
                                                to={"/shop/clothes"}
                                            >
                                                clothes
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className={styles.list__item}>
                                    <NavLink
                                        to={"/vario"}
                                        className={({ isActive }) =>
                                            `${styles.list__item__link} ${
                                                isActive ? styles.active : ""
                                            }`
                                        }
                                    >
                                        vario
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.right}>
                            <ul className={styles.list}>
                                <li
                                    className={`${styles.list__item} ${
                                        search.length > 0
                                            ? styles.search__not_empty
                                            : ""
                                    }`}
                                    id={styles.search}
                                    onClick={toggleSearchBar}
                                >
                                    <div className={styles.search__icon}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type={"text"}
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(
                                                e.target.value.toLocaleLowerCase()
                                            )
                                        }
                                        onKeyDown={onKeyDown}
                                        className={`${styles.search__input} ${
                                            showSearchBar ? styles.show : ""
                                        }`}
                                    />
                                    <div
                                        className={styles.search__title}
                                        onClick={handleSearchButton}
                                    >
                                        search
                                    </div>
                                </li>
                                <li className={styles.list__item}>
                                    <NavLink
                                        to={"/wishlist"}
                                        className={({ isActive }) =>
                                            isActive ? styles.active : ""
                                        }
                                    >
                                        wishlist
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.nav__bottom}>
                        <div className={styles.nav__bottom__icon}>
                            <svg
                                viewBox="0 0 610 750"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <ellipse
                                    cx={301.615}
                                    cy={235.277}
                                    rx={221.615}
                                    ry={223.802}
                                    transform="rotate(136.94 301.615 235.277)"
                                    fill="url(#c)"
                                    fillOpacity={0.23}
                                />
                                <ellipse
                                    cx={303.368}
                                    cy={427.204}
                                    rx={300.346}
                                    ry={302.533}
                                    transform="rotate(136.94 303.368 427.204)"
                                    fill="url(#d)"
                                    fillOpacity={0.23}
                                />
                                <defs>
                                    <radialGradient
                                        id="c"
                                        cx={0}
                                        cy={0}
                                        r={1}
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="scale(221.615 223.802) rotate(90 .155 1.206)"
                                    >
                                        <stop offset={0.516} />
                                        <stop
                                            offset={1}
                                            stopColor="#D9D9D9"
                                            stopOpacity={0}
                                        />
                                    </radialGradient>
                                    <radialGradient
                                        id="d"
                                        cx={0}
                                        cy={0}
                                        r={1}
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="matrix(0 302.533 -300.346 0 303.368 427.204)"
                                    >
                                        <stop offset={0.516} />
                                        <stop
                                            offset={1}
                                            stopColor="#D9D9D9"
                                            stopOpacity={0}
                                        />
                                    </radialGradient>
                                </defs>
                            </svg>
                            <Link
                                to={"/"}
                                className={styles.nav__bottom__title}
                                onClick={hideNavbar}
                            >
                                var
                                <span
                                    className={styles.nav__bottom__title__end}
                                >
                                    io
                                </span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </Wrapper>
        </header>
    );
});

export default Header;
