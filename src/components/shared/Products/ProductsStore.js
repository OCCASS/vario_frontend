import {makeAutoObservable} from "mobx";

class ProductsStore {
  totalCount = 0

  constructor() {
    makeAutoObservable(this)
  }

  setTotalCount = (value) => {
    this.totalCount = value
  }
}

export default new ProductsStore()
