import React from 'react';
import {connect} from "react-redux";
import DropdownList from 'react-widgets/lib/DropdownList'
import {Loader} from  '../../../globalUtilities/Loader'
import {TitleHeader} from "../../../Comman/TitleHeader";
import {BookingAside} from "../../../Comman/BookingAside";
import {Stepper} from "../../../Comman/Stepper";
import {getCarList} from "../../../actions"
import {ActiveViewList, FadeViewList} from "./ViewList";
import {store} from "../../../Services/store";
import {toast} from "react-toastify";

class CarList extends React.Component{
    constructor(props){
        window.scrollTo(0, 0);
        super(props);
        this.state = {
            loading:true,
            filterData:JSON.parse(localStorage.getItem('journeyDetails')) || {},
            list:[],
            length:0
        }
    }

    async componentDidMount() {
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
                list:res.data,
                loading:false,
                length:res.data.length
            })
        }else {
            this.setState({
                loading:false
            })
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

    BookNow =(id)=>{
        const { filterData } = this.state
        if(!filterData.city  || !filterData.dropLocation || !filterData.pickUpDate || !filterData.returnDate || !filterData.seat){
         return  toast.error("Fill the Booking Details")
        }
        this.props.history.push(`/accessories/${id}`)
    }

    onCityChange = (e) => {
        this.setState({
            filterData: {
                ...this.state.filterData,
                "city": e
            }
        })
    };
    search = async () => {
        const data = this.state.filterData;
        store.dispatch({
            type: "SEARCHRESULT",
            payload: { data }
        });
        this.setState({
            redirect:true
        })
        await this.getCarList(data)
    };

    render() {
        const { filterData,loading,list,length } = this.state;
        return(
            <div>
                {loading ? <Loader/> : null }
                <TitleHeader title="Best Offer Cars" link="Best Offers" other={true}/>
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
                                <div className="x_carbooking_right_section_wrapper float_left">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"/>

                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="x_carbook_right_tabs_box_wrapper float_left">
                                                <ul className="nav nav-tabs">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" data-toggle="tab" href="#home"> <i className="flaticon-menu" />
                                                        </a>
                                                    </li>
                                                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#menu1"><i className="flaticon-list" /></a>
                                                    </li>
                                                </ul>
                                                <p><span>Showing 1-{length || 0}</span> of {length || 0} results</p>
                                            </div>
                                        </div>
                                        {length <= 0 ? <h2>Sorry, No car Available</h2> : null }
                                        <div className="col-md-12">
                                            <div className="x_car_book_tabs_content_main_wrapper">
                                                <div className="tab-content">
                                                    <div id="home" className="tab-pane active">
                                                       <ActiveViewList list={list} BookNow={this.BookNow}/>
                                                    </div>
                                                    <div id="menu1" className="tab-pane fade">
                                                        <FadeViewList list={list} BookNow={this.BookNow}/>
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
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state
    }
};

export default connect(mapStateToProps)(CarList);
