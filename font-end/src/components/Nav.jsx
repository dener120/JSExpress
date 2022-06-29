import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {

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
                            <Link class="nav-link" to="/">Главная</Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" to="/orderlist">Мои заказы</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-flex">
                        <li className="nav-item">
                            <a data-page="Войти" href="/" className={`nav-link`}
                            >
                                <i className="bi bi-door-open"/>
                                Войти
                            </a>
                        </li>
                        <li className="nav-item d-f" data-page="Корзина">
                            <div className="container-fluid d-flex align-items-center">
                                <Link class="nav-link" to="cart">
                                    {2}
                                    <i data-page="Корзина" className="bi bi-bag"/>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;