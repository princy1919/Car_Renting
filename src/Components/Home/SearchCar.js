import React from "react";
import {store} from "../../Services/store"
import {Redirect} from "react-router-dom"
import {SearchingCar} from "../../Comman/SearchingCar";

class SearchCar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            redirect:false,
            data: {status: "available",city:"",dropLocation:"",pickUpDate:"2000-01-02",returnDate:"",seat:""},
            errors:{},
            startDate: new Date()
        }

    }

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



    validation = (name, value) => {
        switch (name) {
            case 'city':
                if (!value) {
                    return 'City is require';
                } else {
                    return "";
                }
            case 'dropLocation':
                if (!value) {
                    return 'Drop Location is require';
                } else {
                    return "";
                }
            case 'pickUpDate':
                if (!value) {
                    return 'PickUp Date is require';
                } else {
                    return "";
                }
            case 'returnDate':
                if (!value) {
                    return 'Return Date  is require';
                } else {
                    return ""
                }
            case 'seat':
                if (!value) {
                    return 'Seat is require';
                } else {
                    return "";
                }
            default : {
                return "";
            }
        }
    };



    submit = (e) => {
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
            store.dispatch({
                type: "SEARCHRESULT",
                payload: { data }
            });
            localStorage.setItem('journeyDetails', JSON.stringify(data))
            this.setState({
                redirect:true
            })
        }
    };

    render() {
        const { redirect,errors,data,startDate } = this.state;
        if( redirect ){
            return (
                <Redirect to={{
                    pathname: '/booking'
                }}
                />
            )
        }
        return(
            <>
                <div className="slider-area float_left">
                    <div id="carousel-example-generic" className="carousel slide" data-interval="false" data-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="carousel-captions caption-1">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div className="content">
                                                    <h2 data-animation="animated fadeInLeft">CHEAP CAR RENTAL IN<br />
                                                        your desired destination</h2>
                                                    <p data-animation="animated bounceInUp">One of our top priorities is to adjust each package we offer to our
                                                        <br />customer’s exact needs. Rental Cars / Bike / Jeeps <span>Starting @ $3 / Hrs</span>
                                                    </p>
                                                    <div className="hs_effect_btn">
                                                        <ul>
                                                            <li data-animation="animated flipInX"><a href="#">about us<i className="fa fa-arrow-right" /></a>
                                                            </li>
                                                            <li data-animation="animated flipInX"><a href="#">contact<i className="fa fa-arrow-right" /></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="clear" />
                                                </div>
                                            </div>
                                            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 d-none d-sm-none d-md-none  d-lg-block d-xl-block">
                                                <div className="content_tabs">
                                                    <div className="row">
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                                            <div className="x_slider_form_main_wrapper float_left" data-animation="animated fadeIn">
                                                                <div className="x_slider_form_heading_wrapper float_left">
                                                                    <h3>Let’s find your perfect car</h3>
                                                                </div>
                                                                <SearchingCar
                                                                    startDate={startDate}
                                                                    errors={errors}
                                                                    data={data}
                                                                    onChange={this.onChange}
                                                                    submit={this.submit}
                                                                />
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
                </div>
                <div className="x_responsive_form_wrapper x_responsive_form_wrapper2 float_left d-block d-sm-block d-md-block  d-lg-none d-xl-none">
                        <div className="container">
                            <div className="x_slider_form_main_wrapper float_left">
                                <div className="x_slider_form_heading_wrapper float_left">
                                    <h3>Let’s find your perfect car</h3>
                                </div>
                             <SearchingCar
                                 errors={errors}
                                 onChange={this.onChange}
                                 submit={this.submit}
                            />
                            </div>
                        </div>
                    </div>
            </>
        )
    }
}

export default SearchCar
