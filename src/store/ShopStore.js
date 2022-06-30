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
       return axios.get(BASE+'products').then(({data}) => {
           return runInAction(() => {
               console.log(data)
               this.products = data
               return true;
            });
        });
    }
}

export default ShopStore;