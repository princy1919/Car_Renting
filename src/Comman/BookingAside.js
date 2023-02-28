import React from "react";
import DropdownList from "react-widgets/lib/DropdownList";
import {Location} from "../globalUtilities/CONST"


export const BookingAside =({filterData,onHandleChange,onCityChange,search})=> {
    return(
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="x_slider_form_main_wrapper float_left x_slider_form_main_wrapper_ccb">
                <div className="x_slider_form_heading_wrapper x_slider_form_heading_wrapper_carbooking float_left">
                    <h3>Let’s find your perfect car</h3>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="x_slider_form_input_wrapper float_left">
                            <h3>Pick-up Location</h3>
                            <DropdownList
                                onChange={onCityChange}
                                value={filterData.city}
                                data={Location}
                                placeholder="Please Select City"
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="x_slider_form_input_wrapper float_left">
                            <h3>Drop-off Location</h3>
                            <input
                                type="text"
                                value={filterData.dropLocation}
                                onChange={onHandleChange}
                                name="dropLocation"
                                placeholder="City, Airport, Station, etc."
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-sec-header">
                            <h3>Pick-up Date</h3>
                            <label>Pick-up Date
                                <input
                                    type="date"
                                    style={{cursor:"pointer"}}
                                    value={filterData.pickUpDate}
                                    min={new Date().toISOString().split("T")[0]}
                                    onChange={onHandleChange}
                                    name="pickUpDate"
                                    className="form-control"
                                />

                            </label>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-sec-header">
                            <h3>Drop-Off Date</h3>
                            <label>Pick-up Date
                                <input
                                    type="date"
                                    style={{cursor:"pointer"}}
                                    value={filterData.returnDate}
                                    onChange={onHandleChange}
                                    min={filterData && filterData.pickUpDate}
                                    name="returnDate"
                                    className="form-control"
                                />

                            </label>
                        </div>
                    </div>
                    <div className="col-md-12" style={{marginTop:"7px"}}>
                        <div className="x_slider_form_input_wrapper float_left">
                            <h3>No of Seats</h3>
                            <input
                                type="number"
                                value={filterData.seat}
                                name="seat"
                                onChange={onHandleChange}
                                placeholder="Enter no of seats"
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="x_slider_checout_right x_slider_checout_right_carbooking">
                            <ul>
                                <li>
                                    <a
                                        onClick={search}
                                        style={{color:"white",cursor:"pointer"}}
                                    >
                                        search
                                        <i className="fa fa-arrow-right" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
