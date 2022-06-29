import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../providers/RootStoreProvider";
import ShopStore from "../../store/ShopStore";
import {toJS} from 'mobx'
import ProductItems from "../Products/ProductItems";
import ProductItem from "../Products/ProductItem";


const Products = observer(() => {
    const {rootStore: {shopStore, userStore}} = useStore();

    useEffect(() => {
        shopStore.loadProducts();
    }, [])

    return (
        <div className="container">
            <ProductItems/>
        </div>
    )
})

export default Products;