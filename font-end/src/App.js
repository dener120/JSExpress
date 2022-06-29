import Products from "./components/pages/Products";
import Nav from "./components/Nav";
import {Route, Routes} from "react-router-dom";
import Cart from "./components/pages/Cart";
import OrderList from "./components/pages/OrderList";
import {useStore} from "./components/providers/RootStoreProvider";
import {useEffect} from "react";
import Modal from "./components/Modal";
import AuthReg from "./components/Forms/AuthReg";
import UserPage from "./components/pages/UserPage"


function App() {
    const {rootStore: {shopStore, userStore}} = useStore();

    useEffect(() => {
        shopStore.loadProducts();
    }, [])

    return (
        <>
            <header>
                <Nav/>
            </header>
            <main>
                <Routes>
                    <Route exact path="/" element={<Products/>}/>
                    <Route exact path="/cart" element={<Cart/>}/>
                    <Route exact path="/orderlist" element={<OrderList/>}/>
                    <Route exact path="/user" element={<UserPage/>}/>
                </Routes>
            </main>
            <Modal id={"auth-reg-modal"} child={AuthReg}/>
        </>
    );
}

export default App;
