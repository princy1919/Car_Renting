import React from 'react';
import {connect} from "react-redux";
import {Link,Redirect} from "react-router-dom";
import Slider from "react-slick";
import {store} from "../../Services/store";
import {TitleHeader} from "../../Comman/TitleHeader";
import {Stepper} from "../../Comman/Stepper";
import {BookingAside} from "../../Comman/BookingAside";
import {getCarDetail,getCarList} from "../../actions"
import bc2 from "../../assets/images/bc2.jpg"
import bc3 from "../../assets/images/bc3.jpg"
import bc4 from "../../assets/images/bc4.jpg"
import {Loader} from "../../globalUtilities/Loader";

const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll:1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll:1
            }
        }
    ]
};

class Details extends React.Component{
    constructor(props){
        window.scrollTo(0, 0);
        super(props);
        this.state = {
            loading:true,
            id: this.props.match.params.id,
            filterData:JSON.parse(localStorage.getItem('journeyDetails')) || {},
            details:{},
            redirect:false
        }
    }

    async componentDidMount() {
        const {id} = this.state;
        const res = await getCarDetail(id);
        if (res && res.data) {
            this.setState({details: res.data[0]})
        }
        if (this.state.filterData) {
            const { filterData } = this.state;
            const data = {seat:filterData.seat,city:filterData.city,status:"available"};
            await this.getCarList(data);
        } else {
            await this.getCarList({status: "available"});
        }
    }

    getCarList = async (query) => {
        const res = await getCarList(query);
        if(res && res.data){
            this.setState({
                list:res.data,loading:false
            })
        }else{
            this.setState({loading:false})
        }
    };

    onHandleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            filterData: {
                ...this.state.filterData,
                [name]: value
            }
        })
    };

    onCityChange = (e) => {
        this.setState({
            filterData: {
                ...this.state.filterData,
                "city": e
            }
        })
    };

    search =  () => {
        const data = this.state.filterData;
        store.dispatch({
            type: "SEARCHRESULT",
            payload: { data }
        });
        this.setState({
            redirect:true
        })
    };

    render() {
        const { filterData,details,redirect,loading,id } = this.state;
        if(redirect){
            const data = filterData;
            return (
                <Redirect to={{
                    pathname: '/booking',
                    state:data
                }}
                />
            )
        }else{
            const carName = details && details.model && details.model.concat(details.company);
            return(
                <div>
                    {loading ? <Loader/> : null }
                    <TitleHeader title={carName} link="Dakota Avant" other={true}/>
                    <Stepper
                        c1="x_title_num_main_box_wrapper x_title_num_main_box_wrapper2"
                        c2="x_icon_num x_icon_num2"
                        d1="x_title_num_main_box_wrapper x_title_num_main_box_wrapper3"
                        d2="x_icon_num x_icon_num3"
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
                                            <BookingAside
                                                filterData={filterData}
                                                onHandleChange={this.onHandleChange}
                                                onCityChange={this.onCityChange}
                                                search={this.search}
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="x_car_detail_main_wrapper float_left">
                                                <div className="lr_bc_slider_first_wrapper">
                                                    <Slider {...settings}>
                                                        {/*{*/}
                                                        {/*    details.photos && details.photos.length && details.photos.map((v,i)=>(*/}
                                                        {/*        <>*/}
                                                        {/*         <div className="item">*/}
                                                        {/*            <div className="lr_bc_slider_img_wrapper">*/}
                                                        {/*                <img src={v}  alt="fresh_food_img" />*/}
                                                        {/*            </div>*/}
                                                        {/*        </div> */}
                                                        {/*         </>*/}
                                                        {/*    ))*/}
                                                        {/*}*/}
                                                        <div className="item">
                                                            <div className="lr_bc_slider_img_wrapper">
                                                                <img src={bc2} alt="fresh_food_img" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="lr_bc_slider_img_wrapper">
                                                                <img src={bc3} alt="fresh_food_img" />
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="lr_bc_slider_img_wrapper">
                                                                <img src={bc4} alt="fresh_food_img" />
                                                            </div>
                                                        </div>
                                                    </Slider>
                                                </div>
                                                <div className="x_car_detail_slider_bottom_cont float_left">
                                                    <div className="x_car_detail_slider_bottom_cont_left">
                                                        <h3>{details.model}  {details.company}</h3>
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-o" />
                                                        <i className="fa fa-star-o" />
                                                        <span>251 Reviews</span>
                                                    </div>
                                                    <div className="x_car_detail_slider_bottom_cont_right">
                                                        <h3>Rs {details.rentValue}</h3>
                                                        <p><span>from</span>
                                                            <br />/ day</p>
                                                    </div>
                                                    <div className="x_car_detail_slider_bottom_cont_center float_left">
                                                        <p>{details.description}</p>
                                                            <br />
                                                    </div>
                                                    <div className="x_car_offer_heading x_car_offer_heading_listing float_left x_car_offer_heading_inner_car_names x_car_offer_heading_inner_car_names2">
                                                        <ul className>
                                                            <li>	<a href="#"><i className="fa fa-users" /> &nbsp;{details.seat} Seats</a>
                                                            </li>
                                                            <li>	<a href="#"><i className="fa fa-briefcase"/> &nbsp;{details.bagSpace} Bag Space</a>
                                                            </li>
                                                            <li>	<a href="#"><i className="fa fa-cogs"/> &nbsp;{details.fuelType}</a>
                                                            </li>
                                                            <li>	<a href="#"><i className="fa fa-shield"/> &nbsp;{details.transmission}</a>
                                                            </li>

                                                            <li><a href="#"><i className="fa fa-calendar"/> &nbsp;{details.year}</a>
                                                            </li>
                                                            <li>
                                                                <div className="nice-select" tabIndex={0}>	<span className="current"><i className="fa fa-bars" /> Facilities ({details.facilities && details.facilities.length})</span>
                                                                    <ul className="list">

                                                                        {
                                                                            details.facilities && details.facilities.length && details.facilities.map((v,i)=>(
                                                                                <div key={i}>
                                                                                    <li   className="dpopy_li"><a href="#">{v}</a>
                                                                                    </li>
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="x_avanticar_btn float_left">
                                                        <ul>
                                                            <li><Link  to={`/accessories/${id}`}>Book Now <i className="fa fa-arrow-right" /></Link>
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
                </div>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        token: state
    }
};

export default connect(mapStateToProps)(Details);
