import React from "react";

const ProductItem = () => {
  return <div className="card product p-2 m-3 d-flex flex-column justify-content-between"
    style={{width: '18rem'}}>
      <img className="card-img-top p-3" style={{height: '18rem'}}
        src="https://fakeimg.pl/350x200/"
        alt=""/>
      <div className="m-2">
        <h5 className="card-title">чипсы</h5>
        <p className="card-text">35 грамм</p>
        <p className="card-text">65 ₽</p>
        <div>
          <div
            className="btn-group d-flex justify-content-center align-items-lg-center gap-3 mt-3"
            role="group" aria-label="Basic example">
            <button className="btn btn-primary">В
              корзину
            </button>
          </div>
        </div>
      </div>
  </div>
}

export default ProductItem;