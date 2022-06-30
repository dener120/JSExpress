import React from "react";

import OrderProducts from "./OrderProducts";

const OrderItem = () => {
  return <div className="card cart-item" style={{margin: '1rem'}}>
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
            <OrderProducts/>
        </div>
    </div>
  </div>
}

export default OrderItem;