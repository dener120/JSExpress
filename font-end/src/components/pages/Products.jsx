import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from "../providers/RootStoreProvider";
import ShopStore from "../../store/ShopStore";
import {toJS} from 'mobx'


const Products = observer(() => {
    const {rootStore: {shopStore, userStore}} = useStore();

    useEffect(() => {
        shopStore.loadProducts();
    }, [])

    // useEffect(() => {
    //     console.log(toJS(shopStore.products));
    // }, [shopStore.products])

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
                <div className="card product p-2 m-3 d-flex flex-column justify-content-between"
                     style={{width: '18rem'}}>
                    <img className="card-img-top p-3" style={{height: '18rem'}}
                         src="https://fakeimg.pl/350x200/"
                         alt=""/>
                    <div className="m-2">
                        <h5 className="card-title">чипсы</h5>
                        <p className="card-text">35 грамм</p>
                        <p className="card-text">65 ₽</p>
                        <div>
                            <div
                                className="btn-group d-flex justify-content-center align-items-lg-center gap-3 mt-3"
                                role="group" aria-label="Basic example">
                                <button className="btn btn-primary">В
                                    корзину
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card product p-2 m-3 d-flex flex-column justify-content-between"
                     style={{width: '18rem'}}>
                    <img className="card-img-top p-3" style={{height: '18rem'}}
                         src="https://fakeimg.pl/350x200"
                         alt=""/>
                    <div className="m-2">
                        <h5 className="card-title">чипсы</h5>
                        <p className="card-text">35 грамм</p>
                        <p className="card-text">65 ₽</p>
                        <div>
                            <div
                                className="btn-group d-flex justify-content-center align-items-lg-center gap-3 mt-3"
                                role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-primary">
                                    <i className="bi bi-dash"/>
                                </button>
                                <p className="m-0 p-0 text-center">1 шт</p>
                                <button type="button" disabled=""
                                        className="btn btn-primary">
                                    <i className="bi bi-plus"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card product p-2 m-3 d-flex flex-column justify-content-between"
                     style={{width: '18rem'}}>
                    <img className="card-img-top p-3" style={{height: '18rem'}}
                         src="https://fakeimg.pl/350x200"
                         alt=""/>
                    <div className="m-2">
                        <h5 className="card-title">чипсы</h5>
                        <p className="card-text">35 грамм</p>
                        <p className="card-text">65 ₽</p>
                        <div>
                            <div
                                className="btn-group d-flex justify-content-center align-items-lg-center gap-3 mt-3"
                                role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-danger align-items-lg-center">
                                    Удалить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Products;