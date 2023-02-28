import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {TitleHeader} from "../../../Comman/TitleHeader";
import {Stepper} from "../../../Comman/Stepper";
import {getCarDetail,RegisterBuyer} from "../../../actions";
import {CheckOutDetails} from "../../../Comman/CheckOutDetails";
import BuyerRegister from "./BuyerRegister";
import {toast} from "react-toastify";

class Checkout extends React.Component{
    constructor(props){
        window.scrollTo(0, 0);
        super(props);
        this.state = {
            id: this.props.match.params.id,
            filterData:JSON.parse(localStorage.getItem('journeyDetails')) || {},
            day:0,
            sum:localStorage.getItem("total"),
            gpsSum:localStorage.getItem("gpsSum"),
            insuranceSum:localStorage.getItem("insuranceSum"),
            data:{
                country:"india",firstName:"",lastName:"",email:"",mobile:"",aadharNumber:"",drivingLicenceNumber:"",state:"",city:"",address:'',additionalInfo:"",
                vehicleId:this.props.match.params.id,bookingDetails:this.props.token.search || {}
            },
            errors:{}
        }
    }

    async componentDidMount() {
        const {filterData,id} = this.state;
        if(!filterData.city  || !filterData.dropLocation || !filterData.pickUpDate || !filterData.returnDate || !filterData.seat){
            this.props.history.push("/booking")
        }
        const bookingDate = filterData.pickUpDate;
        const returnDate = filterData.returnDate;
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date(bookingDate);
        const secondDate = new Date(returnDate);
        const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        const res = await getCarDetail(id);
        if (res && res.data) {
            this.setState({details: res.data[0],day:diffDays,data:{...this.state.data,userId:this.props.token.auth._id}})
        }
    }
    validation = (name, value) => {
        switch (name) {
            case 'firstName':
                if (!value) {
                    return 'First Name is require';
                } else {
                    return "";
                }
            case 'lastName':
                if (!value) {
                    return 'Last Name is require';
                } else {
                    return "";
                }
            case 'email':
                if (!value) {
                    return 'Email is require';
                } else {
                    return "";
                }
            case 'mobile':
                if (!value) {
                    return 'mobile  is require';
                } else {
                    return ""
                }
            case 'aadharNumber':
                if (!value.length) {
                    return 'Aadhar Number  is require';
                } else {
                    return ""
                }
            case 'address':
                if (!value) {
                    return 'Address is require';
                } else {
                    return "";
                }
            case 'additionalInfo':
                if (!value) {
                    return 'Additional Info is require';
                } else {
                    return "";
                }
            case 'drivingLicenceNumber':
                if (!value) {
                    return 'Driving Licence Number is require';
                } else {
                    return "";
                }
            case 'state':
                if (!value) {
                    return 'State name is require';
                } else {
                    return "";
                }
            case 'city':
                if (!value) {
                    return 'City name is require';
                } else {
                    return "";
                }

            default : {
                return "";
            }
        }
    };

    BookingDone = async () =>{
        if(!localStorage.getItem("token")){
            return toast.error("First you need to login")
        }
        const {data} = this.state;
        let AllError =  {};
        Object.keys(data).forEach(name => {
            const error = this.validation(name, data[name]);
            if (error && error.length > 0) {
                AllError[name] = error;
            }
        });
        if (Object.keys(AllError).length > 0) {
            this.setState({errors: AllError})
        }else{
            const {details,gpsSum,day,insuranceSum,id} = this.state;
            const total =( parseInt(details.rentValue) * 2 + parseInt(gpsSum)+ parseInt(insuranceSum));
            data.bookingDetails.total = total;
            data.bookingDetails.day = day;
            data.bookingDetails.gpsSum = gpsSum;
            data.bookingDetails.insuranceSum = insuranceSum;
            const res = await RegisterBuyer(data);
            if(res && res.data && res.done){
                toast.success("Successfully Register");
                this.props.history.push(`/booking-done/${id}`)
            }else {
                toast.error("something went wrong")
            }
        }


    };
    onChange =(e,v)=>{
        if(v){
            this.setState({
                data:{...this.state.data,[v]:e}
            })
        }
        else{
            const {name,value} = e.target;
            this.setState({
                data:{...this.state.data,[name]:value}
            })
        }
    };

    render() {
const {errors} = this.state
        return(
            <div>
                <TitleHeader title="Checkout" link="Checkout" other={true}/>
                <Stepper
                    c1="x_title_num_main_box_wrapper"
                    c2="x_icon_num"
                    d1="x_title_num_main_box_wrapper"
                    d2="x_icon_num"
                    co1="x_title_num_main_box_wrapper x_title_num_main_box_wrapper3"
                    co2="x_icon_num x_icon_num3"
                    do1="x_title_num_main_box_wrapper x_title_num_main_box_wrapper3 x_title_num_main_box_wrapper_last"
                    do2="x_icon_num x_icon_num3"
                />
                <div className="x_car_book_sider_main_Wrapper float_left">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="x_car_book_left_siderbar_wrapper float_left">
                                    <div className="row">
                                        <CheckOutDetails {...this.state}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="x_carbooking_right_section_wrapper float_left">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="x_car_checkout_right_main_box_wrapper float_left">
                                                <div className="car-filter order-billing margin-top-0">
                                                    <div className="heading-block text-left margin-bottom-0">
                                                        <h4>Billing Details</h4>
                                                        {
                                                            localStorage.getItem("token")
                                                                ? null
                                                                : <div className="pull-right checkout_login_btn">
                                                                    <ul>
                                                                        <li><Link to="/login">Login <i className="fa fa-arrow-right" /></Link></li>
                                                                    </ul>
                                                                    <p className="retrn">Returning customer?</p>
                                                                </div>
                                                        }
                                                    </div>
                                                    <hr />

                                                <BuyerRegister onChange={this.onChange} error={errors}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="contect_btn contect_btn_contact">
                                                <ul>
                                                    <li><Link onClick={this.BookingDone} >Place an Order <i className="fa fa-arrow-right" /></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        token: state
    }
};

export default connect(mapStateToProps)(Checkout);
