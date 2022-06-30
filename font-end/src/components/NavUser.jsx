import React from "react";
import {useStore} from "./providers/RootStoreProvider";

const NavUser = () => {
    const {rootStore: {shopStore, userStore}} = useStore();

    return (
        <div>
            <h2>Меню</h2>
            <div className="row p-3 col-12 m-t-3">
                <div  className="gap-3 align-items-center justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                    <a style={{width: "12rem", height: "7rem"}} className="col user-nav-item btn btn-light">
                        <span className="nav-item-title">Ваши товары</span>
                        <i className="bi bi-basket3 fs-2"/>
                    </a>
                    <button
                        style={{width: "12rem", height: "7rem"}}
                        className="col user-nav-item btn btn-light"
                        data-bs-toggle="modal"
                        data-bs-target="#create-product-modal"
                    >
                        <span className="nav-item-title">Создать товар</span>
                        <i className="bi bi-bag-plus fs-2"/>
                    </button>
                    <a style={{width: "12rem", height: "7rem"}} className="col user-nav-item btn btn-light">
                        <span className="nav-item-title">Аналитики</span>
                        <i className="bi bi-bar-chart fs-2"/>
                    </a>
                    <button
                        style={{width: "12rem", height: "7rem"}}
                        className="col user-nav-item btn btn-light"
                        data-bs-toggle="modal"
                        data-bs-target="#bank-card-modal"
                    >
                        <span className="nav-item-title">Пополнить счет</span>
                        <i className="bi bi-credit-card-2-back fs-2" />
                        <span className="nav-item-info">{userStore.user.currency} ₽</span>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default NavUser;