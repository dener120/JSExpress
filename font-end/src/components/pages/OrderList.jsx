import React from "react";

const OrderList = () => {

    return (
        <div>
            <div>
                <div className="card-items">
                    <div className="card cart-item" style={{margin: '1rem'}}>
                        <div className="card-header d-flex justify-content-between">
                            <h5 className="">Заказ: <span className="text-primary">4534</span></h5>
                            <h5 className="">1000 ₽</h5>
                        </div>
                        <div className="card-body">
                            <div className="d-flex  flex-column flex-sm-row gap-3 justify-content-between">
                                <div className="">
                                    <p className="text-sm-center text-start">Статус заказа</p>
                                    <div className="badge bg-danger rounded-pill text-wrap" style={{width: '7rem'}}>
                                        Ожидает оплаты
                                    </div>
                                </div>
                                {/* Order Items */}
                                <div className="flex-wrap d-flex">

                                    <figure className="m-1">
                                        <img src="https://fakeimg.pl/250x250/" height="150" width="150" alt=""/>
                                        <figcaption className="text-center">чипсы</figcaption>
                                        <figcaption className="text-center">10 x</figcaption>
                                    </figure>

                                    <figure className="m-1">
                                        <img src="https://fakeimg.pl/250x250/" height="150" width="150" alt=""/>
                                        <figcaption className="text-center">чипсы</figcaption>
                                        <figcaption className="text-center">10 x</figcaption>
                                    </figure>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderList;