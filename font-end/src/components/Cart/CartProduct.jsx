import React from "react";

const CartProduct = () => {
  return <div className="card-item m-3 p-2 col-12 card d-flex flex-row gap-3 justify-content-center align-items-center" style={{width: '100%'}}>
      <img src="https://fakeimg.pl/350x200/" width="100px" height="100px" className="" alt="..." />
      <div className="card-body">
          <h5 className="card-title">салат цезарь</h5>
          <p className="card-text">100 грамм</p>
          <div className="row d-flex flex-row ">
              <select className="mb-3 form-select" aria-label="Default select example" defaultValue="1">
                  <option selected disabled>Количество</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
              </select>
              <button className="btn btn-danger">Удалить</button>
          </div>
      </div>
      <div className="card-body d-flex justify-content-center align-items-center ">
          <h5 className="card-title">100 ₽</h5>
      </div>
  </div>
}

export default CartProduct;