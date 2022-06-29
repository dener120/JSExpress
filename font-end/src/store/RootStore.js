import UserStore from "./UserStore";
import ShopStore from "./ShopStore";

class RootStore {
    constructor() {
        this.userStore = new UserStore()
        this.shopStore = new ShopStore()
    }
}

export default RootStore;