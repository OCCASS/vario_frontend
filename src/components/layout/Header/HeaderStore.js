import { makeAutoObservable } from "mobx";

class HeaderStore {
    showNavbar = false;
    showSearchBar = false;
    showShopDropdown = false;
    search = "";

    constructor() {
        makeAutoObservable(this);
    }

    get searchString() {
        return this.search.toLowerCase().trim();
    }

    setSearch = (value) => {
        this.search = value;
    };

    toggleNavbar = () => {
        this.showNavbar = !this.showNavbar;
    };

    hideNavbar = () => {
        this.showNavbar = false;
    };

    toggleSearchBar = () => {
        this.showSearchBar = !this.showSearchBar;
    };

    hideSearchBar = () => {
        this.showSearchBar = false;
    };

    setShowSearchBar = (value) => {
        this.showSearchBar = value;
    };

    toggleShopDropdown = () => {
        this.showShopDropdown = !this.showShopDropdown;
    };

    hideShopDropdown = () => {
        this.showShopDropdown = false;
    };
}

export default new HeaderStore();
