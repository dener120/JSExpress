import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../providers/RootStoreProvider";
import ProductItems from "../Products/ProductItems";
import {toJS} from "mobx";

const Products = observer(() => {
    const {rootStore: {shopStore}} = useStore();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        shopStore.loadProducts().then((loading => {
            if (loading) setIsLoading(false);
        }));
    }, []);

    return (
        <div className="container p-3">
            <h2>Товары</h2>
            {
                isLoading === true
                    ?
                    <div className="spinner-container">
                        <div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :

                    toJS(shopStore.products).length <= 0
                        ?
                        <h3 className="m-5">Товаров нет :(</h3>
                        :
                        <ProductItems/>

            }
        </div>
    )
})

export default Products;