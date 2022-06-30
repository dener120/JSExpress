import React from "react";

const Cart = () => {

    return (
        <div className="container p-3">
            <h2>Корзина</h2>
            <div className="row col-12">
                <div className="col col-md-6 row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
                    <div
                        className="card-item m-3 p-2 col-12 card d-flex flex-row gap-3 justify-content-center align-items-center"
                        style={{width: '100%'}}>
                        <img src="https://fakeimg.pl/350x200/" width="100px" height="100px" className="" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">салат цезарь</h5>
                            <p className="card-text">100 грамм</p>
                            <div className="row d-flex flex-row ">
                                <select className="mb-3 form-select" aria-label="Default select example"
                                        defaultValue="1">
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

                    <div
                        className="card-item m-3 p-2 col-12 card d-flex flex-row gap-3 justify-content-center align-items-center"
                        style={{width: '100%'}}>
                        <img src="https://fakeimg.pl/350x200/" width="100px" height="100px" className="" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">чипсы</h5>
                            <p className="card-text">35 грамм</p>
                            <div className="row d-flex flex-row ">
                                <select className="mb-3 form-select" aria-label="Default select example"
                                        defaultValue="1">
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


                </div>

                <div className="col col-1"/>

                <div className="m-3 p-0 col-md-4 card text-center" style={{height: '12rem'}}>
                    <div className="card-header">
                        <button style={{width: '60%'}} className="btn btn-success">Заказать</button>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Ваша корзина</h5>
                        <p className="card-text">Количество товаров: {1}</p>
                    </div>
                    <div className="card-footer text-muted">
                        <p className="card-text">Общая стоимость: 2000 ₽</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Cart;