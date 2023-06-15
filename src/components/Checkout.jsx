import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const state = useSelector((state) => state.addItem)

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        );
    }

    return (
        <>
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">корзина</span>
                            <span className="badge bg-primary rounded-pill">{state.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {state.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Итог (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Промо код" />
                                <button type="submit" className="btn btn-secondary">Принять</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Адресс</h4>
                        <form className="needs-validation" novalidate="">
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="firstName" className="form-label">Имя</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                   
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="lastName" className="form-label">Фамилия</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                    
                                </div>



                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email <span className="text-muted"></span></label>
                                    <input type="email" className="form-control" id="email" placeholder="апвп@mail.ru" />
            
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Адресс</label>
                                    <input type="text" className="form-control" id="address" placeholder="что то" required="" />
            
                                </div>

                            

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Страна</label>
                                    <select className="form-select" id="country" required="">
                                        <option value="">Выбрать</option>
                                        <option>Россия</option>
                                    </select>
             
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">Грод</label>
                                    <select className="form-select" id="state" required="">
                                        <option value="">Выбрать</option>
                                        <option>Москва</option>
                                    </select>
                                    
                                </div>

               
                            </div>

                            <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address" />
                                <label className="form-check-label" htmlFor="same-address">Это мой адресс</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="save-info" />
                                <label className="form-check-label" htmlFor="save-info">Запомнить данные</label>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Оплата</h4>

                            <div className="my-3">
                                <div className="form-check">
                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                                    <label className="form-check-label" htmlFor="credit">Credit card</label>
                                </div>
                                <div className="form-check">
                                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="debit">Debit card</label>
                                </div>
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                </div>
                            </div>

                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label htmlFor="cc-name" className="form-label">Номер</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                   
                                   
                                </div>


                                <div className="col-md-3">
                                    <label htmlFor="cc-expiration" className="form-label">Срок</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                    
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="cc-cvv" className="form-label">CCV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                    
                                </div>
                            </div>

                            <hr className="my-4" />

                            <button className="w-100 btn btn-primary btn-lg" type="submit">Оформить заказ</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
