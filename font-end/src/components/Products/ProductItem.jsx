import React from "react";
import {observer} from "mobx-react-lite";
import BASE from '../../config'

const ProductItem = observer((props) => {
    const {
        id,
        name,
        description,
        price,
        category,
        img,
        quantity
    } = props;

    console.log(props)

    return (
        <div className="card product p-2 m-3 d-flex flex-column justify-content-between"
             style={{width: '18rem'}}>
            <img className="card-img-top p-3" style={{height: '18rem'}}
                 src={`${BASE}/${img}`}
                 alt=""/>
            <div className="m-2">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">35 грамм</p>
                <p className="card-text">{price} ₽</p>
                <div>
                    <div
                        className="btn-group d-flex justify-content-center align-items-lg-center gap-3 mt-3"
                        role="group" aria-label="Basic example">
                        {
                            quantity <- 0
                                ?
                                <button disabled="true" className="btn btn-secondary">
                                    Нет в наличии
                                </button>
                                :
                                <button className="btn btn-primary" >В
                                    корзину
                                </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
})

export default ProductItem;