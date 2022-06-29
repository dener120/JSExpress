import UserStore from "./UserStore";
import ShopStore from "./ShopStore";
import {makeAutoObservable} from "mobx";

class RootStore {
    constructor() {
        this.userStore = new UserStore()
        this.shopStore = new ShopStore()
    }
}

export default RootStore;