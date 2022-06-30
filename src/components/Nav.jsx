import React from "react";
import {Link} from "react-router-dom";
import {useStore} from "./providers/RootStoreProvider";
import {observer} from "mobx-react-lite";
import {toJS} from "mobx";

const Nav = observer(() => {
    const {rootStore: {shopStore, userStore}} = useStore();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <Link className="className="ml-5 navbar-brand to="/">
                        <i className=" bi bi-shop text-info  fs-1"/>
                    </Link>
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
                            {
                                !userStore.user.id
                                    ?
                                    <a
                                        type="button"
                                        className="nav-link"
                                        data-bs-toggle="modal"
                                        data-bs-target="#auth-reg-modal"
                                    >
                                        <i className="bi bi-door-open"/>
                                        Войти
                                    </a>
                                    :
                                    <Link className="nav-link" to="user">
                                        <i className="ml-3 bi bi-person"/>
                                        Пользователь
                                    </Link>
                            }
                        </li>
                        <li className="nav-item d-f" data-page="Корзина">
                            <div className="container-fluid d-flex align-items-center">
                                <Link className="nav-link" to="cart">
                                    {userStore.cart.length}
                                    <i  className="bi bi-bag"/>
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