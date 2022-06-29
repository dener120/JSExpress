import React from "react";
import {Link} from "react-router-dom";
import {useStore} from "./providers/RootStoreProvider";
import {observer} from "mobx-react-lite";

const Nav = observer(() => {
    const {rootStore: {shopStore, userStore}} = useStore();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a  data-page="Главная" className="navbar-brand" href="/">
                        <img src="https://fakeimg.pl/250x100/" alt="" width="30" height="24"
                             className=" d-inline-block align-text-center"/>
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Главная</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/orderlist">Мои заказы</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-flex">
                        <li className="nav-item">
                            <a
                                type="button"
                                className="nav-link"
                                data-bs-toggle="modal"
                                data-bs-target="#auth-reg-modal">
                                <i className="bi bi-door-open"/>
                                Войти
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                type="button"
                                className="nav-link"
                                data-bs-toggle="modal"
                                data-bs-target="#add-prod-modal">
                                <i className="bi bi-door-open"/>
                                Добавить продукт
                            </a>
                        </li>
                        <li className="nav-item d-f" data-page="Корзина">
                            <div className="container-fluid d-flex align-items-center">
                                <Link className="nav-link" to="cart">
                                    {userStore.cart.length}
                                    <i data-page="Корзина" className="bi bi-bag"/>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
})

export default Nav;