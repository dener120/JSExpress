import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../providers/RootStoreProvider";
import ShopStore from "../../store/ShopStore";
import {toJS} from 'mobx'
import ProductItems from "../Products/ProductItems";

const Products = observer(() => {
    const {rootStore: {shopStore, userStore}} = useStore();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        shopStore.loadProducts().then((loading => {
            console.log(loading)
            if(loading) setIsLoading(false);
        }));
    }, []);

    return (
        <div className="container p-3">
            <h2>Товары</h2>
            {console.log(isLoading)}
            {
                isLoading === true
                    ?
                   <div className="spinner-container">
                       <div className="spinner-border text-info" role="status">
                           <span className="visually-hidden">Loading...</span>
                       </div>
                   </div>
                    :
                    <ProductItems/>
            }
        </div>
    )
})

export default Products;