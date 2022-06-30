import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../providers/RootStoreProvider";
import ShopStore from "../../store/ShopStore";
import {toJS} from 'mobx'
import ProductItems from "../Products/ProductItems";

const Products = observer(() => {
    const {rootStore: {shopStore, userStore}} = useStore();

    useEffect(() => {
        shopStore.loadProducts();
    }, [])

    return (
        <div className="container p-3">
                <h2>Товары</h2>
            <ProductItems/>
        </div>
    )
})

export default Products;