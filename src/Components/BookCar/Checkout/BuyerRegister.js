import React from "react";
import {FormText} from "reactstrap";
import DropdownList from "react-widgets/lib/DropdownList";
import {Location} from "../../../globalUtilities/CONST";

const BuyerRegister =({onChange,error})=> {
    return (
        <form className="billing-form">
            <ul className="list-unstyled row">
                <li className="col-md-6">
                    <label>First Name *
                        <input type="text" name="firstName" onChange={onChange} placeholder className="form-control"/>
                    </label>
                    <p style={{color:"red"}}>{error.firstName}</p>
                </li>
                <li className="col-md-6">
                    <label>Last Name *
                        <input type="text" name="lastName" onChange={onChange} placeholder className="form-control"/>
                    </label>
                    <p style={{color:"red"}}>{error.lastName}</p>
                </li>
                <li className="col-md-6">
                    <label>Email Address *
                        <input type="text" name="email" onChange={onChange} placeholder className="form-control"/>
                        <p style={{color:"red"}}>{error.email}</p>
                    </label>
                </li>
                <li className="col-md-6">
                    <label>Phone
                        <input type="number" name="mobile" onChange={onChange} placeholder className="form-control"/>
                    </label>
                    <p style={{color:"red"}}>{error.mobile}</p>
                </li>
                <li className="col-md-6">
                    <label>Driver's Lisence ID
                        <input type="text" name="drivingLicenceNumber" onChange={onChange} placeholder
                               className="form-control"/>
                    </label>
                    <FormText color="muted">
                        For Ex. GJxx 234xxxxxxxx
                    </FormText>
                    <p style={{color:"red"}}>{error.drivingLicenceNumber}</p>
                </li>
                <li className="col-md-6">
                    <label>Aadhar Number
                        <input type="number" name="aadharNumber" onChange={onChange} placeholder
                               className="form-control"/>
                    </label>
                    <FormText color="muted">
                        For Ex. xxxx xxxx xxxx
                    </FormText>
                    <p style={{color:"red"}}>{error.aadharNumber}</p>
                </li>
                <li className="col-md-6">
                    <label>State</label>
                    <DropdownList
                        onChange={(e) => onChange(e, "state")}
                        placeholder="Select"
                        data={[
                            'Gujarat'
                        ]}
                    />
                    <p style={{color:"red"}}>{error.state}</p>
                </li>
                <li className="col-md-6">
                    <label>City/town</label>
                    <DropdownList
                        onChange={(e) => onChange(e, "city")}
                        placeholder="Select"
                        data={Location}
                    />
                    <p style={{color:"red"}}>{error.city}</p>
                </li>
                <li className="col-md-12">
                    <label>Street Address
                        <input type="text" name="address" onChange={onChange} placeholder className="form-control"/>
                    </label>
                    <p style={{color:"red"}}>{error.address}</p>
                </li>
                <li className="col-md-12">
                    <label>Additional information</label>
                    <textarea name="additionalInfo" onChange={onChange}
                              placeholder="Notes about your order, e.g. special notes for car." className="form-control"
                              defaultValue={""}/>
                    <p style={{color:"red"}}>{error.additionalInfo}</p>
                </li>
            </ul>
            <hr/>
            <div className="payme-opton">
                <div className="heading-block text-left margin-bottom-30">
                    <h4>Payment</h4>
                </div>
                <div className="radio">
                    <input type="radio" name="ratio" id="poa" defaultValue="option1" defaultChecked/>
                    <label htmlFor="poa">Payment on Arrival</label>
                </div>
                <div className="radio">
                    <input type="radio" name="ratio" id="paypal" defaultValue="option1"/>
                    <label htmlFor="paypal">Paypal</label>
                </div>
                <div className="radio">
                    <input type="radio" name="ratio" id="stripe" defaultValue="option1"/>
                    <label htmlFor="stripe">Stripe</label>
                </div>
            </div>
            <hr/>
            {
                localStorage.getItem("token")
                    ? null
                    : <div className="checkbox car_checkout_chekbox car_checkout_chekbox1">
                        <input type="checkbox" id="c2" name="cb"/>
                        <label htmlFor="c2">Create an Account?</label>
                    </div>
            }

            <div className="checkbox car_checkout_chekbox">
                <input type="checkbox" id="c3" name="cb"/>
                <label htmlFor="c3">I have Read and Accept Terms &amp; Conditions *</label>
            </div>
        </form>
    )
}
export default BuyerRegister