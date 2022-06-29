import React from 'react';

// id: 'deposit-cash';

const DepositCash = () => {
  return (
    <div className="modal-card card text-left border-0">
      <div className="card border-0">
        <p className="h1 text-center color">Пополнить </p>
      </div>
      <div className="cc">
        <h2 color="card-title">Bank of CodePen</h2>

        <span className="provider mastercard">MasterCard</span>
        <span className="provider amex">American Express</span>
        <span className="provider visa">Visa</span>

        <div className="number">
          <input type="text" maxlength="4" placeholder="5280" />
          <input type="text" maxlength="4" />
          <input type="text" maxlength="4" />
          <input type="text" maxlength="4" />
          <span className="instructions">5280</span>
        </div>

        <div className="date">
          <span className="instructions valid">Valid Thru</span>
          <input type="text" maxlength="5" placeholder="00/00" />

          <span className="instructions valid">CCV</span>
          <input type="text" maxlength="3" placeholder="123" />
        </div>

        <div className="name">
          <input
              className="full-name"
            type="text"
            maxlength=""
            inputmode="numeric"
            placeholder="John Doe"
          />
          <span className="instructions">Name on Card</span>
        </div>

        <div className="shine"></div>
        <div className="shine shine-layer-two"></div>
      </div>
    </div>
  );
};

export default DepositCash;
