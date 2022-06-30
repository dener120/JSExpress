import {makeObservable, observable, action, runInAction, makeAutoObservable} from "mobx";
import axios from "axios";
import {toJS} from 'mobx'
import jwt_decode from "jwt-decode";
import BASE from '../config'

class UserStore {
    constructor() {
        this.user = {
            id: JSON.parse(localStorage.getItem('user'))?.id,
            email:  '' || JSON.parse(localStorage.getItem('user'))?.email,
            currency: 0  || JSON.parse(localStorage.getItem('user'))?.currency
        }
        this.cart = [];
        this.order = [];
        this.createdProducts = [];
        makeObservable(this, {
            user: observable,
            cart: observable,
            order: observable,
            createdProducts: observable,
            auth: action,
            logAuth: action,
            addCart: action,
            removeCart: action,
            changeCart: action,
            loadCart: action,
            loadOrder: action,
            registration: action
        })
    }

    registration(email, password, fullname) {
        console.log(email, password)
        return  axios({
            method: 'post',
            url: BASE + 'auth/registration',
            data: {
                email: email,
                password: password
            }
        }).then((res) => {
            return runInAction(() => {
                const decodeToke = jwt_decode(res.data.token);
                this.user.id = decodeToke.id;
                this.user.currency = decodeToke.currency;
                this.user.email = decodeToke.email;
                localStorage.setItem('user', JSON.stringify({
                    id: decodeToke.id,
                    currency: decodeToke.currency,
                    email: decodeToke.email,
                }));
                return (res.status);
            });
        })
    }

    auth(email, password) {
        return  axios({
            method: 'post',
            url: BASE + 'auth/login',
            data: {
                email: email,
                password: password
            }
        }).then((res) => {
           return runInAction(() => {
                const decodeToke = jwt_decode(res.data.token);
                this.user.id = decodeToke.id;
                this.user.currency = decodeToke.currency;
                this.user.email = decodeToke.email;
                localStorage.setItem('user', JSON.stringify({
                    id: decodeToke.id,
                    currency: decodeToke.currency,
                    email: decodeToke.email,
                }));
                return (res.status);
            });
        })
    }

    logAuth() {
        localStorage.removeItem('user');
        this.user.id = null;
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