import {action, makeObservable, observable, runInAction} from "mobx";
import axios from "axios";
import {toJS} from 'mobx'

class ShopStore {


    constructor() {
        this.products = [];
        makeObservable(this, {
            products: observable,
            loadProducts: action,
        });
    }

    loadProducts() {
        axios.get('mock-up/products.json').then(({data}) => {
            runInAction(() => {
                this.products = data
            });
        });
    }
}

export default ShopStore;