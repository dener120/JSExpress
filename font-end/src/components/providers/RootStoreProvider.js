import RootStore from "../../store/RootStore";
import {createContext, useContext} from "react";
import ShopStore from "../../store/ShopStore";
import UserStore from "../../store/UserStore";


const store = {
    rootStore: new RootStore()
}

const StoreContext = createContext(store);
const useStore = () => {
    return useContext(StoreContext);
}

export {StoreContext, useStore};
export default store;