import React, {useEffect} from "react";
import ProductItem from "./ProductItem";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";
import {useStore} from "../providers/RootStoreProvider";

const ProductItems = observer(() => {
    const {rootStore: {shopStore, userStore}} = useStore();

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
            {toJS(shopStore.products).map(product => <ProductItem key={product.id} {...product}/>)}
        </div>
    )
})

export default ProductItems;