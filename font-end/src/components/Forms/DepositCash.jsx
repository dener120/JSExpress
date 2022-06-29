import React from 'react';

// id: 'deposit-cash';

const DepositCash = () => {
    return (
        <>
            <div className="bank-card-modal card text-left border-0">
                <div className="card border-0">
                    <p className="h1 text-center color">Пополнить </p>
                </div>
                <div className="cc">
                    <h2 className="bank-card-title">Банковская карта</h2>

                    <div className="number">
                        <input type="text" maxLength="4" placeholder="5280"/>
                        <input type="text" maxLength="4"/>
                        <input type="text" maxLength="4"/>
                        <input type="text" maxLength="4"/>
                        <span className="instructions">5280</span>
                    </div>

                    <div className="date">
                        <span className="instructions valid">Valid Thru</span>
                        <input type="text" maxLength="5" placeholder="00/00"/>

                        <span className="instructions valid">CCV</span>
                        <input type="text" maxLength="3" placeholder="123"/>
                    </div>

                    <div className="name">
                        <input
                            className="full-name"
                            type="text"
                            maxLength=""
                            inputMode="numeric"
                            placeholder="John Doe"
                        />
                        <span className="instructions">Name on Card</span>
                    </div>
                </div>

            </div>
            <button style={{marginTop: "15px"}} type="button" className="btn btn-success">Пополнить</button>
        </>
    );
};

export default DepositCash;
