import {makeObservable, observable, action, runInAction, makeAutoObservable} from "mobx";
import axios from "axios";
import {toJS} from 'mobx'
import jwt_decode from "jwt-decode";
import BASE from '../config'

class UserStore {
    constructor() {
        this.cart = [];
        this.email = '';
        this.id = Number(localStorage.getItem('id'));
        this.currency = '';
        this.order = [];
        this.createdProducts = [];
        makeObservable(this, {
            cart: observable,
            order: observable,
            email: observable,
            id: observable,
            currency: observable,
            createdProducts: observable,
            auth: action,
            logAuth: action,
            addCart: action,
            removeCart: action,
            changeCart: action,
            loadCart: action,
            loadOrder: action
        })
    }

    auth(email, password) {
        axios({
            method: 'post',
            url: BASE + 'auth/login',
            data: {
                email: email,
                password: password
            }
        }).then(({data: {token}}) => {
            runInAction(() => {
                const decodeToke = jwt_decode(token);
                this.currency = decodeToke.currency;
                this.id = decodeToke.id;
                this.email = decodeToke.email;
                localStorage.setItem('id', this.id);
            });
        })
    }

    logAuth() {
        localStorage.removeItem('id');
        this.id = null;
    }

    loadCart() {

    }

    addCart() {

    }

    removeCart() {

    }

    changeCart() {

    }

    sendCart() {

    }

    loadOrder() {

    }
}

export default UserStore;