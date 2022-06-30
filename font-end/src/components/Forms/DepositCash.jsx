import React, {useState} from 'react';
import {useStore} from "../providers/RootStoreProvider";

// id: 'deposit-cash';

const DepositCash = () => {
    const {rootStore: {shopStore, userStore}} = useStore();

    const [carInputs, setCardInputs] = useState({
        firstInput: '',
        secondInput: '',
        thirdInput: '',
        fourthInput: '',
        dateInput: '',
        ccvInput: '',
        nameInput: '',
        value: 0,
        success: ''
    })

    const handleChange = (e) => {
        setCardInputs({...carInputs, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        userStore.upCurrency(carInputs.value).then(code => {
            console.log(code)
            if (code === 201) {
                setCardInputs({
                    ...carInputs,
                    success: 'Счет пополнен'
                })
                setTimeout(() => {
                    setCardInputs({...carInputs,success: ''})
                },10000)
            }
        });
    }

    return (
        <>
            <div className="bank-card-modal card text-left border-0">
                <div className="card border-0">
                    <p className="h1 text-center color">Пополнить </p>
                </div>
                <div className="cc">
                    <h2 className="bank-card-title">Банковская карта</h2>

                    <div className="number">
                        <input
                            type="text"
                            maxLength="4"
                            placeholder="5280"
                            name="firstInput"
                            value={carInputs.firstInput}
                            onChange={(e) => handleChange(e)}
                        />
                        <input
                            type="text"
                            maxLength="4"
                            name="secondInput"
                            value={carInputs.secondInput}
                            onChange={(e) => handleChange(e)}
                        />
                        <input
                            type="text"
                            maxLength="4"
                            name="thirdInput"
                            value={carInputs.thirdInput}
                            onChange={(e) => handleChange(e)}
                        />
                        <input
                            type="text"
                            maxLength="4"
                            name="fourthInput"
                            value={carInputs.fourthInput}
                            onChange={(e) => handleChange(e)}
                        />
                        <span className="instructions">5280</span>
                    </div>

                    <div className="date">
                        <span className="instructions valid">Дата</span>
                        <input
                            type="text"
                            maxLength="5"
                            placeholder="00/00"
                            name="dateInput"
                            value={carInputs.dateInput}
                            onChange={(e) => handleChange(e)}
                        />

                        <span className="instructions valid">CCV</span>
                        <input
                            type="text"
                            maxLength="3"
                            placeholder="123"
                            name="ccvInput"
                            value={carInputs.ccvInput}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>

                    <div className="name">
                        <input
                            className="full-name"
                            type="text"
                            maxLength=""
                            inputMode="numeric"
                            placeholder="John Doe"
                            name="nameInput"
                            value={carInputs.nameInput}
                            onChange={(e) => handleChange(e)}
                        />
                        <span className="instructions">Имя</span>
                    </div>
                </div>

            </div>
            <div className="m-3">
                <label  className="form-label">Сумма</label>
                <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="value"
                    value={carInputs.value}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <button
                style={{marginTop: "15px"}}
                type="button"
                className="btn btn-success"
                onClick={(e) => handleSubmit(e)}
            >
                Пополнить
            </button>
        </>
    );
};

export default DepositCash;
