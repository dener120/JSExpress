import {makeObservable, observable, action, runInAction} from "mobx";
import axios from "axios";
import jwt_decode from "jwt-decode";
import BASE from '../config'

class UserStore {
    constructor() {
        this.user = {
            id: JSON.parse(localStorage.getItem('user'))?.id,
            email: JSON.parse(localStorage.getItem('user'))?.email || '',
            currency: JSON.parse(localStorage.getItem('user'))?.currency || 0,
            roles: JSON.parse(localStorage.getItem('user'))?.roles || [],
            fullname: JSON.parse(localStorage.getItem('user'))?.fullname || []
        }
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
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
            registration: action,
            createProduct: action,
            upCurrency: action
        });
    }

    registration(email, password, fullname) {
        const [name, surname, patronymic] = fullname.split(' ');
        return axios({
            method: 'post',
            url: BASE + 'auth/registration',
            data: {
                email: email,
                password: password,
                name: name,
                surname: surname,
                patronymic: patronymic,
            }
        }).then((res) => {
            return runInAction(() => {
                const decodeToke = jwt_decode(res.data.token);
                this.user.id = decodeToke.id;
                this.user.roles = decodeToke.roles.map(role => role.description)
                this.user.currency = decodeToke.currency;
                this.user.email = decodeToke.email;
                localStorage.setItem('user', JSON.stringify({
                    id: decodeToke.id,
                    currency: decodeToke.currency,
                    email: decodeToke.email,
                    roles: this.user.roles,
                }));
                return (res.status);
            });
        });
    }

    auth(email, password) {
        return axios({
            method: 'post',
            url: BASE + 'auth/login',
            data: {
                email: email,
                password: password
            }
        }).then((res) => {
            return runInAction(() => {
                const decodeToke = jwt_decode(res.data.token);
                console.log(decodeToke);
                this.user.id = decodeToke.id;
                this.user.currency = decodeToke.currency;
                this.user.email = decodeToke.email;
                this.user.roles = decodeToke.roles.map(role => role.description);
                localStorage.setItem('user', JSON.stringify({
                    id: decodeToke.id,
                    currency: decodeToke.currency,
                    email: decodeToke.email,
                    roles: this.user.roles,
                    fullname: [decodeToke.name, decodeToke.patronymic, decodeToke.surname]
                }));
                return (res.status);
            });
        });
    }

    logAuth() {
        localStorage.removeItem('user');
        this.user.id = null;
    }

    loadCart() {

    }

    addCart(id) {
        if (this.cart.length === 0){
            this.cart.push({id: id, quantity: 1});
            localStorage.setItem('cart', JSON.stringify(this.cart));
            return;
        }
        if(this.cart.filter(item => item.id === id).length > 0) {
            this.cart.map(itme => itme.id === id ? {...itme, quantity:itme.quantity++} : itme);
            localStorage.setItem('cart', JSON.stringify(this.cart));
            return;
        }
        this.cart = [...this.cart, {id: id, quantity: 1}];
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    removeCart() {

    }

    changeCart() {

    }

    sendCart() {

    }

    loadOrder() {

    }

    createProduct({name, price, quantity, img, type, description}) {
        return axios({
            method: 'post',
            url: BASE + 'products',
            data: {
                name: name,
                price: price,
                quantity: quantity,
                description: description,
                type: type,
                userId: this.user.id,
                img: img
            },
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            return runInAction(() => {
                return (res.status);
            });
        });
    }

    upCurrency(value) {
        return axios({
            method: 'post',
            url: BASE + 'users/add_money',
            data: {
                id: this.user.id,
                money: value
            },
        }).then((res) => {
            return runInAction(() => {
                console.log(value)
                this.user.currency = Number(this.user.currency) + Number(value);
                localStorage.setItem('user', JSON.stringify({...this.user}));
            });
        });
    }
}

export default UserStore;