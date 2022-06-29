import Products from "./components/pages/Products";
import Nav from "./components/Nav";
import {Route, Routes} from "react-router-dom";
import Cart from "./components/pages/Cart";
import OrderList from "./components/pages/OrderList";


function App() {
  return (
      <>
        <header>
          <Nav/>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Products/>} />
            <Route exact path="/cart" element={<Cart/>} />
            <Route exact path="/orderlist" element={<OrderList/>} />
          </Routes>
        </main>
      </>
  );
}

export default App;
