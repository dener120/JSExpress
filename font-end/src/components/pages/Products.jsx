import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../providers/RootStoreProvider";
import ShopStore from "../../store/ShopStore";
import {toJS} from 'mobx'
import ProductItems from "../Products/ProductItems";

const Products = observer(() => {


    return (
        <div className="container">
            <ProductItems/>
        </div>
    )
})

export default Products;