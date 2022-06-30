import {action, makeObservable, observable, runInAction} from "mobx";
import axios from "axios";
import {toJS} from 'mobx'
import BASE from '../config'


class ShopStore {
    constructor() {
        this.products = [];
        makeObservable(this, {
            products: observable,
            loadProducts: action,
        });
    }

    loadProducts() {
        axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        axios.get(BASE+'products').then(({data}) => {
            runInAction(() => {
                this.products = data
            });
        });
    }
}

export default ShopStore;