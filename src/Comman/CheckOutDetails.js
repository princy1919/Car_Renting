import React from "react";
export const CheckOutDetails = (props) =>{
 const {details,day,filterData,sum,gpsSum,insuranceSum} = props
    return(
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="car-filter accordion x_inner_car_acc_accor">
                <h3>Order Details</h3>
                <hr />
                <div className="x_car_access_filer_top_img">
                    <img src={details && details.photos[0]} alt="car_img" width="100%" />
                    <h3>{details && details.model} {details && details.company}</h3>
                    <p>Rs {details && details.rentValue} (1 day)</p>
                </div>
                <hr />
                <div className="panel panel-default x_car_inner_acc_acordion_padding">
                    <div className="collapse show">
                        <div className="panel-body">
                            <div className="x_car_acc_filter_date">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Day</th>
                                        <th scope="col">Rate</th>
                                        <th scope="col">Subtotal</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{day}</td>
                                        <td>Rs{details && details.rentValue}</td>
                                        <td>Rs {details && details.rentValue*day}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="panel panel-default x_car_inner_acc_acordion_padding x_car_inner_acc_acordion_padding_last">
                    <div className="panel-heading car_checkout_caret">
                        <h5 className="panel-title"> <a href="#"> Pick-up Date &amp; place</a> </h5>
                    </div>
                    <div className="collapse show">
                        <div className="panel-body">
                            <div className="x_car_acc_filter_date">
                                <ul>
                                    <li>{filterData.pickUpDate}</li>
                                    <li>{filterData.city}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="panel panel-default x_car_inner_acc_acordion_padding x_car_inner_acc_acordion_padding_last">
                    <div className="panel-heading car_checkout_caret">
                        <h5 className="panel-title"> <a href="#"> Drop-Off Date &amp; place</a> </h5>
                    </div>
                    <div className="collapse show">
                        <div className="panel-body">
                            <div className="x_car_acc_filter_date">
                                <ul>
                                    <li>{filterData.returnDate}</li>
                                    <li>{filterData.dropLocation}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="panel panel-default x_car_inner_acc_acordion_padding x_car_inner_acc_acordion_padding_last">
                    <div className="panel-heading car_checkout_caret">
                        <h5 className="panel-title"> <a href="#"> Accessories</a> </h5>
                    </div>
                    <div className="collapse show">
                        <div className="panel-body">
                            <div className="x_car_acc_filter_date">
                                <ul>
                                    <li>{day}x GPS <span>Rs {gpsSum}</span>
                                    </li>
                                    <li>{day}xInsurance <span>Rs {insuranceSum}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="panel panel-default x_car_inner_acc_acordion_padding x_car_inner_acc_acordion_padding_last">
                    <div className="panel-heading car_checkout_caret">
                        <h5 className="panel-title"> <a href="#"> Taxes &amp; Fees</a> </h5>
                    </div>
                    <div className="collapse show">
                        <div className="panel-body">
                            <div className="x_car_acc_filter_date">
                                <ul>
                                    <li>Sales (1%) <span>$1</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="panel panel-default x_car_inner_acc_acordion_padding x_car_inner_acc_acordion_padding_last">
                    <div className="collapse show">
                        <div className="panel-body">
                            <div className="x_car_acc_filter_date">
                                <input type="text" placeholder="Coupon Code" />
                                <button type="submit"><i className="fa fa-arrow-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="x_car_acc_filter_bottom_total">
                    <ul>
                        <li>total <span>Rs {localStorage.getItem("total")*day}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
