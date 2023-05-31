import { makeAutoObservable } from "mobx";

class ProductStore {
    detail = {};
    sizes = [];
    currentImageSlide = 0;
    selectedSizeIndex = null;

    constructor() {
        makeAutoObservable(this);
    }

    resetSelectedSizeIndex = () => {
        this.selectedSizeIndex = null;
    };

    resetCurrentImageSlide = () => {
        this.currentImageSlide = 0;
    };

    setDetail = (value) => {
        this.detail = value;
    };

    setSizes = (value) => {
        this.sizes = value;
    };

    setCurrentImageSlide = (value) => {
        this.currentImageSlide = value;
    };

    setSelectedSizeIndex = (value) => {
        this.selectedSizeIndex = value;
    };
}

export default ProductStore;
