import React from "react";

export const OrderDetails = ({details,filterData,day,gps,insurance}) => {
    const total = localStorage.getItem("total")*day;
    return (
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
                    <div className="panel-heading">
                        <h5 className="panel-title"> <a data-toggle="collapse" href="#collapseTwo" className="collapse"> date</a> </h5>
                    </div>
                    <div id="collapseTwo" className="collapse show">
                        <div className="panel-body">
                            <div className="x_car_acc_filter_date">
                                <ul>
                                    <li>From <span>{filterData.pickUpDate}</span>
                                    </li>
                                    <li>To <span>{filterData.returnDate}</span>
                                    </li>
                                    <li>Duration <span>{day} Day</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="panel panel-default x_car_inner_acc_acordion_padding">
                    <div className="panel-heading">
                        <h5 className="panel-title"> <a data-toggle="collapse" href="#collapseThree" className="collapse"> location</a> </h5>
                    </div>
                    <div id="collapseThree" className="collapse show">
                        <div className="panel-body">
                            <div className="x_car_acc_filter_date">
                                <ul>
                                    <li>Pick-up <span>{filterData.city}</span>
                                    </li>
                                    <li>Drop-off <span>{filterData.dropLocation}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="panel panel-default x_car_inner_acc_acordion_padding x_car_inner_acc_acordion_padding_last">
                    <div className="panel-heading">
                        <h5 className="panel-title"> <a data-toggle="collapse" href="#collapsefour" className="collapse"> Accessories</a> </h5>
                    </div>
                    <div id="collapsefour" className="collapse show">
                        <div className="panel-body">
                            <div className="x_car_acc_filter_date">
                                <ul>
                                    <li>{day} Day  x GPS <span>Rs {gps ? day*100 : 0}</span>
                                    </li>
                                    <li>{day} Day  x Insurance <span>Rs {insurance ? day*350 : 0}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="x_car_acc_filter_bottom_total">
                    <ul>
                        <li>total <span>Rs {total}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
