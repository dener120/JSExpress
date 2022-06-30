import React, {useState} from "react";
import {useStore} from "../providers/RootStoreProvider";
import {logDOM} from "@testing-library/react";

// id: 'add-prod-modal'

const AddProduct = () => {
    const {rootStore: {shopStore, userStore}} = useStore();

    const [createProductForm, setCreateProductForm] = useState({
        name: '',
        description: '',
        price: 0,
        quantity: 0,
        img: null,
        error: '',
        success: '',
        isValid: true
    })

    const handleChange = (e) => {
        setCreateProductForm({...createProductForm, [e.target.name]: e.target.value});
    }

    const validateForm = () => {
        const numberReq = new RegExp(/^\d+$/);
        const textReq = new RegExp(/^[а-яa-zA-ЯA-Z0-9\s]+/);
        let isValid = true;
        const messages = [];

        if(!createProductForm.img) {
            messages.push('Добавьте изображение товара.');
            isValid = false;
        }
        if(!textReq.test(createProductForm.name)) {
            messages.push('Некорректное имя.');
            isValid = false;
        }
        if(!textReq.test(createProductForm.description)) {
            messages.push('Некорректное Описание.');
            isValid = false;
        }
        if(!numberReq.test(createProductForm.price)){
            messages.push('Некорректное Цена.');
            isValid = false;
        }
        if(!numberReq.test(createProductForm.quantity)){
            messages.push('Некорректное количество товара.');
            isValid = false;
        }

        if (!isValid) {
            setCreateProductForm({...createProductForm, isValid: false, error: messages.join(' ')});
        } else {
            setCreateProductForm({...createProductForm, isValid: true, error: ''});
        }

        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validateForm()) return
        userStore.createProduct({...createProductForm}).then(code => {
            console.log(code)
            if (code === 201) {
                setCreateProductForm({
                    ...createProductForm,
                    success: 'Товар создан'
                })
                setTimeout(() => {
                    setCreateProductForm({...createProductForm,success: ''})
                },10000)
            }
        });
    }

    return <div className="card text-left border-0">
        <div className="card border-0">
            <p className="h1 text-center color">Добавить продукт</p>
        </div>
        <div className="card-body">
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="add" role="tabpanel" aria-labelledby="home-tab">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name-product1" className="form-label">Название продукта</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name-product1"
                                aria-describedby="emailHelp"
                                name="name"
                                value={createProductForm.name}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description-product1" className="form-label">Описание продукта</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description-product1"
                                name="description"
                                value={createProductForm.description}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description-product1" className="form-label">Цена</label>
                            <input
                                type="number"
                                className="form-control"
                                id="description-product1"
                                name="price"
                                value={createProductForm.price}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Количество</label>
                            <input
                                type="number"
                                className="form-control"
                                id="exampleInputPassword1"
                                name="quantity"
                                value={createProductForm.quantity}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="img-input" className="form-label">Добавьте картинку</label>
                            <input
                                type="file"
                                className="form-control"
                                id="img-input"
                                name="img"
                                onChange={(e) => setCreateProductForm({
                                    ...createProductForm,
                                    [e.target.name]: e.target.files[0]
                                })}
                            />
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Загрузить
                        </button>
                    </form>
                    {
                        createProductForm.error.length > 0
                            ?
                            <div className="mt-3 form-error form-text danger">
                                {createProductForm.error}
                            </div>
                            :
                            ""
                    }
                    {
                        createProductForm.success.length > 0
                            ?
                            <div className="mt-3 form-success form-text danger">
                                {createProductForm.success}
                            </div>
                            :
                            ""
                    }
                </div>

                <div className="tab-pane fade" id="reg" role="tabpanel" aria-labelledby="contact-tab">

                </div>

            </div>
        </div>
    </div>
}


export default AddProduct;