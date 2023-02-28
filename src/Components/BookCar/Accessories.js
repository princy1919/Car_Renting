import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import g1 from "../../assets/images/g1.png"
import g4 from "../../assets/images/g4.png"
import {TitleHeader} from "../../Comman/TitleHeader";
import {Stepper} from "../../Comman/Stepper";
import {getCarDetail} from "../../actions";
import {OrderDetails} from "../../Comman/OrderDetails";
import {Insurance} from "../../globalUtilities/CONST";
import {store} from "../../Services/store";
import {toast} from "react-toastify";

let gpsSum=0;
let insuranceSum=0;
class Accessories extends React.Component{
    constructor(props){
        window.scrollTo(0, 0);
        super(props);
        this.state = {
            id: this.props.match.params.id,
            filterData:JSON.parse(localStorage.getItem('journeyDetails')) || {},
            day:0,
            gps:false,
            insurance:false
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
            this.setState({details: res.data[0],day:diffDays})
        }
    }

    render() {
        const { filterData,day ,details,id,gps,insurance } = this.state;
        if(gps){
            localStorage.setItem("gpsSum",`${day*100}`);
            gpsSum =  100;
        }else {
            localStorage.setItem("gpsSum",`${0}`);
            gpsSum = 0
        }
        if(insurance) {
            localStorage.setItem("insuranceSum",`${day * 350}`);
            insuranceSum =  350
        }else {
            localStorage.setItem("insuranceSum",`${0}`);
            insuranceSum =0;
        }
        filterData.total = details && parseInt(details.rentValue) + insuranceSum + gpsSum;
        localStorage.setItem("total",details && parseInt(details.rentValue) + insuranceSum + gpsSum);
        return(
                <div>
                    <TitleHeader title="Booking Accessories" link="Details" other={true}/>
                    <Stepper
                        c1="x_title_num_main_box_wrapper"
                        c2="x_icon_num"
                        d1="x_title_num_main_box_wrapper x_title_num_main_box_wrapper3"
                        d2="x_icon_num x_icon_num2"
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
                                            <OrderDetails
                                                          filterData={filterData}
                                                          details={details} day={day}
                                                          gps={gps} insurance={insurance}
                                                          insuranceSum={insuranceSum}
                                                          gpsSum={gpsSum}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
                                    <div className="x_carbooking_right_section_wrapper float_left">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="x_car_access_right_price_main_box_wrapper float_left">
                                                    <div className="x_car_access_right_price_main_box_inner_left_wrapper">
                                                        <div className="x_car_access_right_price_img_wrapper">
                                                            <img src={g1} alt="g1_img" />
                                                        </div>
                                                        <div className="x_car_access_right_price_img_cont_wrapper">
                                                            <h3>GPS</h3>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipi Sicing elit.</p>
                                                        </div>
                                                    </div>
                                                    <div className="x_car_access_right_price_main_box_inner_right_wrapper">
                                                        <div className="x_car_acc_price_dollar_wrapper">
                                                            <h3>Rs 100</h3>
                                                            <p>/ day</p>
                                                        </div>
                                                        <div className="x_car_acc_price_dollar_count_wrapper">
                                                            <div className="quantity">
                                                                <input type="checkbox" name="gps" onChange={()=>{this.setState({gps:!gps})}} className="qty" style={{width:"27%"}}/>
                                                                {/*<input type="number" min={1} max={100} step={1} defaultValue={1} className="qty" />*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="x_car_access_right_price_main_box_wrapper x_car_access_right_price_main_box_wrapper2 float_left">
                                                    <div className="x_car_access_right_price_main_box_inner_left_wrapper">
                                                        <div className="x_car_access_right_price_img_wrapper">
                                                            <img src={g4} alt="g1_img" />
                                                        </div>
                                                        <div className="x_car_access_right_price_img_cont_wrapper">
                                                            <h3>Insurance</h3>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipi Sicing elit.</p>
                                                        </div>
                                                    </div>
                                                    <div className="x_car_access_right_price_main_box_inner_right_wrapper">
                                                        <div className="x_car_acc_price_dollar_wrapper">
                                                            <h3>Rs 350</h3>
                                                            <p>/ day</p>
                                                        </div>
                                                        <div className="x_car_acc_price_dollar_count_wrapper">
                                                            <div className="quantity">
                                                                <input type="checkbox"  name="insurance" onChange={()=>{this.setState({insurance:!insurance})}} className="qty" style={{width:"27%"}}/>
                                                                {/*<input type="number" min={1} max={100} step={1} defaultValue={1} className="qty" />*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>&nbsp;
                                            <div className="col-md-12">
                                                <strong>Included in the price:</strong>
                                                <ul id="horizontal-list">
                                                    {
                                                        Insurance.map((value,index)=>(
                                                            <div key={index}>
                                                            <li><i className="fa fa-check-circle-o" style={{color:"green"}}/>&nbsp;{value}</li>
                                                            </div>
                                                        ))
                                                }

                                                </ul>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="x_car_acc_bottom_button float_left">
                                                    <p><i className="fa fa-info-circle" /> &nbsp;Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor.</p>
                                                    <ul>
                                                        <li><Link to={`/checkout/${id}`}>Proceed to checkout <i className="fa fa-arrow-right" /></Link>
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

export default connect(mapStateToProps)(Accessories);
