import React from 'react';
import c1 from "../../assets/images/icon-checked.png"
import {TitleHeader} from "../../Comman/TitleHeader";
import {Stepper} from "../../Comman/Stepper";
import {getCarDetail,getBuyerDetail,pdf} from "../../actions";

class BookingDone extends React.Component{
    constructor(props){
        window.scrollTo(0, 0);
        super(props)
        this.state = {
            buyerDetails:{},
            id: this.props.match.params.id,
            details:{},
            loading:false,
            isHome:false
        }
    }
    componentDidMount = async ()=> {
        localStorage.removeItem("journeyDetails")
        localStorage.removeItem("total")
        localStorage.removeItem("insuranceSum")
        localStorage.removeItem("gpsSum")
        const res = await getBuyerDetail(this.state.id);
        if (res && res.data) {
            this.setState({buyerDetails: res.data[0]})
        }
        const response = await getCarDetail(this.state.id);
        if (response && response.data) {
            this.setState({details: response.data[0]})
        }
    };

    pdfGenerate = async () => {
        const {buyerDetails,details} = this.state;
        const data = buyerDetails;
        data.company = details.company
        data.model = details.model
        this.setState({
            loading:true
        },async ()=>{
            const res = await pdf(data);
            if (res) {
                const file = new Blob([res], {type: 'application/pdf'});
                const fileURL = URL.createObjectURL(file);
                window.open(fileURL);
            }
            this.setState({
                loading:false,
                isHome:true
            })
        })

    };
    render() {
        const {buyerDetails,details,isHome} = this.state;
        const bookingDetail = buyerDetails && buyerDetails.bookingDetails || {};
        const data = buyerDetails && buyerDetails || {};
        return(
                <div>
                    <TitleHeader title="Order Done" link="Done" other={true}/>
                    <Stepper
                        c1="x_title_num_main_box_wrapper"
                        c2="x_icon_num"
                        d1="x_title_num_main_box_wrapper"
                        d2="x_icon_num"
                        co1="x_title_num_main_box_wrapper"
                        co2="x_icon_num"
                        do1="x_title_num_main_box_wrapper x_title_num_main_box_wrapper3 x_title_num_main_box_wrapper_last"
                        do2="x_icon_num x_icon_num3"
                    />
                    <div className="x_car_donr_main_box_wrapper float_left">
                        <div className="container">
                            <div className="x_car_donr_main_box_wrapper_inner">
                                <div className="order-done"> <i className="icon-checked"><img src={c1} alt="" /></i>
                                    <h4>thank you! Order has been received</h4>
                                    <h4>Order number: <span>{data.orderId}</span></h4>
                                    <hr />
                                    <h4>Summary</h4>
                                    <ul className="row list-unstyled">
                                        <li className="col-md-6">
                                            <h6>Date</h6>
                                            <p>From <span>{bookingDetail.pickUpDate}</span>
                                            </p>
                                            <p>To <span>{bookingDetail.returnDate}</span>
                                            </p>
                                            <p>Days <span>{bookingDetail.day}</span>
                                            </p>
                                        </li>
                                        <li className="col-md-6">
                                            <h6>Location</h6>
                                            <p>Pick-Up <span>{bookingDetail.city}</span>
                                            </p>
                                            <p>Drop-off <span>{bookingDetail.dropLocation}</span>
                                            </p>
                                        </li>
                                        <li className="col-md-6">
                                            <h6>Car</h6>
                                            <p>{details && details.model} {details && details.company}<span>Rs {details && details.rentValue}</span>
                                            </p>
                                        </li>
                                        <li className="col-md-6">
                                            <h6>Add-ons</h6>
                                            <p>{bookingDetail.day}x GPS <span>Rs {bookingDetail.gpsSum}</span>
                                            </p>
                                            <p>Extended Insurance <span>Rs {bookingDetail.insuranceSum}</span>
                                            </p>
                                        </li>
                                        <li className="col-md-6">
                                            <h6>Taxes &amp; Fees</h6>
                                            <p>Sales Tax (1%) <span>$1</span>
                                            </p>
                                        </li>
                                        <li className="col-md-6">
                                            <h6>Total</h6>
                                            <p>Payment on Arrival <span>Rs {bookingDetail.total}</span>
                                            </p>
                                        </li>
                                        <li className="col-md-12">
                                            <h6>Billing Information</h6>
                                            <p><strong>Name :</strong> {data.firstName} {data.lastName}
                                                <br /><strong>Email :</strong> {data.email}
                                                <br /><strong>Driver’s License ID :</strong> {data.drivingLicenceNumber}
                                                <br /><strong>Phone :</strong> {data.mobile}
                                                <br /><strong>Address :</strong> {data.address}
                                                <br /><strong>Country :</strong> {data.country}
                                                <br /><strong>State :</strong> {data.state}
                                                <br /><strong>City :</strong> {data.city}
                                                <br />
                                            </p>
                                        </li>
                                    </ul>
                                    <hr />
                                    <div className="col-md-12">
                                        <div className="x_slider_checout_right x_slider_checout_right_carbooking contect_btn contect_btn_contact">
                                            <ul>
                                                <li>
                                                   {isHome ?  <a
                                                        onClick={()=>{this.props.history.push("/")}}
                                                        style={{color:"white",cursor:"pointer",marginTop:"-70px"}}
                                                    >
                                                        Go To Home <i className="fa fa-home" />
                                                    </a> :  <a
                                                       onClick={this.pdfGenerate}
                                                       style={{color:"white",cursor:"pointer",marginTop:"-70px"}}
                                                       >
                                                       Print Order <i className="fa fa-print" />
                                                       </a>}
                                                </li>
                                            </ul>
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

export default BookingDone
