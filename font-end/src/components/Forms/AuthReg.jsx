import React, {useState} from "react";


const AuthReg = () => {
    const [authForm, setAuthForm] = useState({
        email: '',
        password: '',
        isValid: false,
        error: '',
    });

    const [regForm, setRegForm] = useState({
        fullname: '',
        email: '',
        password: '',
        "second-password": '',
        address: '',
        isValid: false,
        error: '',
    })

    const handleChangeAuth = (e) => {
        setAuthForm({...authForm, [e.target.name]: e.target.value})
    }
    const handleChangeReg = (e) => {
        setRegForm({...regForm, [e.target.name]: e.target.value})
    }

    const validAutForm = () => {
        const passwordReg = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
        const emailReg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        let isValid = true;
        let messages = [];

        if (!passwordReg.test(authForm.password)) {
            isValid = false
            messages.push('Неверный пароль.')
        }
        if (!emailReg.test(authForm.email)) {
            isValid = false
            messages.push('Неверный email.')
        }

        if (!isValid) {
            setAuthForm({...authForm, isValid: false, error: messages.join(' ')})
        } else {
            setAuthForm({...authForm, isValid: true, error: ''})
        }

        return isValid;
    }

    const validRegForm = () => {
        const passwordReg = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
        const emailReg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const addressReg = new RegExp(/^[а-яA-Я0-9\s.,]+/);

        let isValid = true;
        let messages = [];

        if(!addressReg.test(regForm.address)) {
            messages.push('Некорректный адрес')
        }

        if (!passwordReg.test(regForm.password)) {
            isValid = false
            messages.push('Неверный пароль.')
        }
        if (!emailReg.test(regForm.email)) {
            isValid = false
            messages.push('Неверный email.')
        }
        if (regForm.password !== regForm["second-password"]) {
            messages.push('Пароли не совпадают.')
        }


        if (!isValid) {
            setRegForm({...regForm, isValid: false, error: messages.join(' ')})
        } else {
            setRegForm({...regForm, isValid: true, error: ''})
        }

        return isValid;
    }

    const handleSubmitAuth = (e) => {
        e.preventDefault();
        console.log(validAutForm());
        if (!validAutForm()) return;
        console.log('send')
    }

    const handleSubmitReg = (e) => {
        e.preventDefault();
        console.log(validRegForm());
        console.log(regForm)
        if (!validRegForm()) return;
        console.log('send')

    }


    return (
        <div className="card text-center border-0">

            <ul className="nav nav-tabs border-0 btn-group" id="auth-reg-tab" role="tablist">
                <li className="nav-item col-12 col-sm-6" role="presentation">
                    <button className="nav-link col-12 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#auth"
                            type="button" role="tab" aria-controls="home" aria-selected="true">
                        Авторизация
                    </button>
                </li>
                <li className="nav-item col-12 col-sm-6" role="presentation">
                    <button className="nav-link col-12" id="profile-tab" data-bs-toggle="tab" data-bs-target="#reg"
                            type="button" role="tab" aria-controls="profile" aria-selected="false">
                        Регистрация
                    </button>
                </li>
            </ul>
            <div className="card-body">
                <div className="tab-content mt-3" id="myTabContent">

                    <div className="tab-pane fade show active" id="auth" role="tabpanel" aria-labelledby="home-tab">

                        <form
                            id="auth-form"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email адрес</label>
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    id="email-auth"
                                    value={authForm.email}
                                    onChange={(e) => handleChangeAuth(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="password-auth"
                                    value={authForm.password}
                                    onChange={(e) => handleChangeAuth(e)}
                                />
                            </div>
                            <button
                                type="button"
                                onClick={(e) => handleSubmitAuth(e)}
                                className="btn btn-success"
                            >
                                Авторизоваться
                            </button>
                            {
                                authForm.error.length > 0
                                    ?
                                    <div className="mt-3 form-error form-text danger">
                                        {authForm.error}
                                    </div>
                                    :
                                    ""
                            }
                        </form>

                    </div>

                    <div className="tab-pane fade" id="reg" role="tabpanel" aria-labelledby="contact-tab">
                        <form id="reg-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="mb-3">
                                <label htmlFor="full-name" className="form-label">ФИО</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="full-name"
                                    name="fullname"
                                    value={regForm.fullname}
                                    onChange={(e) => handleChangeReg(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email-reg" className="form-label">Email адрес</label>
                                <input type="email"
                                       className="form-control"
                                       id="email-reg"
                                       aria-describedby="emailHelp"
                                       name="email"
                                       value={regForm.email}
                                       onChange={(e) => handleChangeReg(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="first-password" className="form-label">Пароль</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="first-password"
                                    name="password"
                                    value={regForm.password}
                                    onChange={(e) => handleChangeReg(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="second-password" className="form-label">Пароль подтверждение</label>
                                <input type="password"
                                       className="form-control"
                                       id="second-password"
                                       name="second-password"
                                       value={regForm["second-password"]}
                                       onChange={(e) => handleChangeReg(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Адрес</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    value={regForm.address}
                                    onChange={(e) => handleChangeReg(e)}
                                />
                            </div>

                            <button
                                type="button"

                                className="btn btn-success"
                                onClick={(e) => handleSubmitReg(e)}
                            >
                                Регистрация
                            </button>
                        </form>
                        {
                            regForm.error.length > 0
                                ?
                                <div className="mt-3 form-error form-text danger">
                                    {regForm.error}
                                </div>
                                :
                                ""
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AuthReg;
