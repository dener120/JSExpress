import React from "react";

const AuthReg = () => {

    return (
        <div className="card text-center">
            <div className="card-header">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#auth"
                                type="button" role="tab" aria-controls="home" aria-selected="true">Авторизация
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#reg"
                                type="button" role="tab" aria-controls="profile" aria-selected="false">Регистрация
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                type="button" role="tab" aria-controls="contact" aria-selected="false">Contact
                        </button>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <div className="tab-content" id="myTabContent">

                    <div className="tab-pane fade show active" id="auth" role="tabpanel" aria-labelledby="home-tab">

                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone
                                        else.
                                    </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>

                    <div className="tab-pane fade" id="reg" role="tabpanel" aria-labelledby="contact-tab">

                    </div>

                </div>
            </div>
        </div>
)
}

export default AuthReg;
