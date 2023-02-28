import React from "react";
import {DropdownList} from "react-widgets";
import {Location} from "../globalUtilities/CONST";

export const SearchingCar = ({errors,onChange,submit,data}) => {
    return(
        <div className="row">
            <div className="col-md-12">
                <div className="x_slider_form_input_wrapper float_left">
                    <h3>Pick-up Location</h3>
                    <DropdownList
                        name="city"
                        onChange={(e)=>onChange(e,"city")}
                        defaultValue={"Please Select City"}
                        data={Location}
                    />
                    <p style={{color:"red"}}>{errors.city}</p>
                </div>
            </div>
            <div className="col-md-12">
                <div className="x_slider_form_input_wrapper float_left">
                    <h3>Drop-off Location</h3>
                    <DropdownList
                        name="dropLocation"
                        onChange={(e)=>onChange(e,"dropLocation")}
                        defaultValue={"Please Select City"}
                        data={Location}
                    />
                    <p style={{color:"red"}}>{errors.dropLocation}</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-sec-header">
                    <h3>Pick-up Date</h3>
                    <label className="">Pick-up Date
                        <input
                            type="date"
                            name="pickUpDate"
                            min={new Date().toISOString().split("T")[0]}
                            onChange={onChange}
                            className="form-control"
                        />
                    </label>
                    <p style={{color:"red",marginTop:"14px"}}>{errors.pickUpDate}</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-sec-header">
                    <h3>Drop-Off Date</h3>
                    <label className="" style={{cursor:"pointer"}}>Pick-up Date
                        <input
                            type="date"
                            name="returnDate"
                            min={data && data.pickUpDate}
                            onChange={onChange}
                            className="form-control"
                        />
                        <p style={{color:"red",marginTop:"14px"}}>{errors.returnDate}</p>
                    </label>
                </div>
            </div>
            <div className="col-md-12" style={{marginTop:"7px"}}>
                <div className="x_slider_form_input_wrapper float_left">
                    <h3>No of Seats</h3>
                    <input
                        type="number"
                        name="seat"
                        onChange={onChange}
                        placeholder="Enter no of seats"
                    />
                    <p style={{color:"red"}}>{errors.seat}</p>
                </div>
            </div>

            <div className="col-md-12">
                <div className="x_slider_checkbox_bottom float_left">
                    <div className="x_slider_checout_left">

                    </div>
                    <div className="x_slider_checout_right">
                        <ul>
                            <li><a  onClick={submit} style={{color:"white",cursor:"pointer"}}>search <i className="fa fa-arrow-right" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};
