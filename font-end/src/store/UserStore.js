import {makeObservable, observable, action, makeAutoObservable} from "mobx";

class UserStore {
    constructor() {
        this.cart = [];
        this.user = {};
        this.order = [];
        this.currency = 0;

        makeObservable(this, {
            cart: observable,
            user: observable,
            order: observable,
            currency: observable,
            auth: action,
            logAuth: action,
            addCart: action,
            removeCart: action,
            changeCart: action,
            loadCart: action,
            loadOrder: action
        })
    }

    auth() {

    }

    logAuth() {

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