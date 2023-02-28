import React from "react";
import {Link} from "react-router-dom";
import c1 from "../../../assets/images/c1.png";

export const ActiveViewList = ({list,BookNow}) => (
    <>
        <div className="row">
            {
                list  && list.map((value, index) => (
                    <div key={index} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="x_car_offer_main_boxes_wrapper float_left">
                            <div className="x_car_offer_starts float_left"><i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star-o"/>
                                <i className="fa fa-star-o"/>
                            </div>
                            <div className="x_car_offer_img float_left">
                                <img src={value.photos[0]} alt="img" width="73%" height="135px"/>
                            </div>
                            <div className="x_car_offer_price float_left">
                                <div className="x_car_offer_price_inner">

                                    <h3>Rs {value.rentValue}</h3>
                                    <p><span>from</span>
                                        <br/>/ day</p>
                                </div>
                            </div>
                            <div className="x_car_offer_heading float_left">
                                <h2><a href="#"> {value.model}</a></h2>
                                <p>{value.company}</p>
                            </div>
                            <div className="x_car_offer_heading float_left">
                                <ul>
                                    <li><a href="#"><i className="fa fa-users"/> &nbsp;{value.seat}</a>
                                    </li>

                                    <li><a href="#"><i className="fa fa-cogs"/> &nbsp;{value.fuelType.charAt(0)}</a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-briefcase"/> &nbsp;{value.bagSpace}</a>
                                    </li>

                                    <li>
                                        <div className="nice-select" tabIndex={0}><span className="current"><i
                                            className="fa fa-bars"/></span>
                                            <ul className="list">
                                                {
                                                    value.facilities.map((v,i)=>(
                                                        <div key={i}>
                                                        <li  className="dpopy_li">
                                                            <a href="#">{v}</a>
                                                        </li>
                                                        </div>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="x_car_offer_bottom_btn float_left">
                                <ul>
                                    <li><Link onClick={BookNow} to={`/accessories/${value._id}`}>Book now</Link>
                                    </li>
                                    <li><Link to={`/details/${value._id}`}>Details</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
);

export const FadeViewList = ({list,BookNow}) => (
    <>
        <div className="row">
            {
                list  && list.map((value, index) => (
                    <div key={index} className="col-md-12">
                        <div className="x_car_offer_main_boxes_wrapper float_left">
                            <div className="x_car_offer_starts x_car_offer_starts_list_img float_left"><i
                                className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star"/>
                                <i className="fa fa-star-o"/>
                                <i className="fa fa-star-o"/>
                                <div className="x_car_offer_img x_car_offer_img_list float_left">
                                    <img src={value.photos[0]} alt="img" width="90%" height="120px"/>
                                </div>
                                <div className="x_car_offer_price x_car_offer_price_list float_left">
                                    <div className="x_car_offer_price_inner x_car_offer_price_inner_list">

                                        <h3>Rs {value.rentValue}</h3>
                                        <p><span>from</span>
                                            <br/>/ day</p>
                                    </div>
                                </div>
                            </div>
                            <div className="x_car_offer_starts_list_img_cont">
                                <div className="x_car_offer_heading x_car_offer_heading_list float_left">
                                    <h2><a href="#">{value.model}</a></h2>
                                    <p>{value.company}</p>
                                </div>
                                <div className="x_car_offer_bottom_btn x_car_offer_bottom_btn_list float_left">
                                    <ul>
                                        <li>
                                            <Link onClick={()=> {BookNow(value._id)}}>Book now</Link>
                                        </li>
                                        <li>
                                            <Link to={`/details/${value._id}`}>Details</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="x_car_offer_heading x_car_offer_heading_listing float_left">
                                    <ul className>

                                        <li><a href="#"><i className="fa fa-users"/> &nbsp;{value.seat} Seats</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-briefcase"/> &nbsp;{value.bagSpace} Bag Space</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-cogs"/> &nbsp;{value.fuelType}</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-shield"/> &nbsp;{value.transmission}</a>
                                        </li>
                                        <li><a href="#"><i className="fa fa-calendar"/> &nbsp;{value.year}</a>
                                        </li>
                                        <li>
                                            <div className="nice-select" tabIndex={0}><span className="current"><i
                                                className="fa fa-bars"/> Facilities ({value.facilities.length})</span>
                                                <ul className="list">
                                                    {
                                                        value.facilities.map((v,i)=>(
                                                            <div key={i}>
                                                                <li  className="dpopy_li">
                                                                    <a href="#">{v}</a>
                                                                </li>
                                                            </div>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
);
