import React from "react";

// id: 'add-prod-modal'

const addProduct = () => {
  return <div className="card text-left border-0">
    <div className="card border-0">
        <p className="h1 text-center color" >Добавить продукт</p>
    </div>
    <div className="card-body">
        <div className="tab-content" id="myTabContent">

            <div className="tab-pane fade show active" id="add" role="tabpanel" aria-labelledby="home-tab">

                <form>
                    <div className="mb-3">
                        <label htmlFor="name-product1" className="form-label">Название продукта</label>
                        <input type="input" className="form-control" id="name-product1"
                              aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description-product1" className="form-label">Описание продукта</label>
                        <input type="input" className="form-control" id="description-product1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Количество</label>
                        <input type="input" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="img-input" className="form-label">Добавьте картинку</label>
                        <input type="file" className="form-control" id="img-input"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Загрузить</button>
                </form>

            </div>

            <div className="tab-pane fade" id="reg" role="tabpanel" aria-labelledby="contact-tab">

            </div>

        </div>
    </div>
  </div>
}


export default addProduct;