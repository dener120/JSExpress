import React from "react";

const AuthReg = () => {

    return (
        <div className="card text-center border-0">

            <ul className="nav nav-tabs border-0 btn-group" id="auth-reg-tab" role="tablist">
                <li className="nav-item col-12 col-sm-6" role="presentation">
                    <button className="nav-link col-12 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#auth"
                            type="button" role="tab" aria-controls="home" aria-selected="true">Авторизация
                    </button>
                </li>
                <li className="nav-item col-12 col-sm-6" role="presentation">
                    <button className="nav-link col-12" id="profile-tab" data-bs-toggle="tab" data-bs-target="#reg"
                            type="button" role="tab" aria-controls="profile" aria-selected="false">Регистрация
                    </button>
                </li>
            </ul>
            <div className="card-body">
                <div className="tab-content" id="myTabContent">

                    <div className="tab-pane fade show active" id="auth" role="tabpanel" aria-labelledby="home-tab">

                        <form id="auth-form">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email адрес</label>
                                <input type="email" className="form-control" id="email-auth"
                                       aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                                <input type="password" className="form-control" id="password-auth"/>
                            </div>
                            <button type="submit" className="btn btn-success">Авторизоваться</button>
                        </form>

                    </div>

                    <div className="tab-pane fade" id="reg" role="tabpanel" aria-labelledby="contact-tab">

                        <form id="auth-form">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email адрес</label>
                                <input type="email" className="form-control" id="email-auth"
                                       aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                                <input type="password" className="form-control" id="password-auth"/>
                            </div>
                            <button type="submit" className="btn btn-success">Регистрация</button>
                        </form>

                    </div>

                </div>
            </div>
        </div>
)
}

export default AuthReg;
