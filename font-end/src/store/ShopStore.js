import {makeObservable, observable, action, makeAutoObservable} from "mobx";

class ShopStore {


    constructor() {
        this.products = [
            123,123,123
        ]
        makeObservable(this, {
            products: observable,
            loadProducts: action
        })
    }

    loadProducts() {
        console.log(this.products)
    }

}

export default ShopStore;