import React from "react";
import {TitleHeader} from "../Comman/TitleHeader";
import {Loader} from "../globalUtilities/Loader";
import a1 from "../assets/images/about_img1.jpg"
import t0 from "../assets/team/IMG_20191103_112329.jpg"
import t1 from "../assets/team/WhatsApp Image 2020-05-30 at 6.39.06 PM.jpeg"
import t2 from "../assets/team/WhatsApp Image 2020-05-30 at 2.13.09 PM.jpeg"
import t3 from "../assets/team/WhatsApp Image 2020-05-30 at 6.27.47 PM.jpeg"
import HowItWorks from "./Home/HowItWorks";


const About =()=>{
    window.scrollTo(0, 0);
    return(
        <div>
            <Loader/>
            <TitleHeader title="About Us" link="About Us"/>
            <div className="x_about_seg_main_wrapper float_left padding_tb_100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="x_about_seg_img_wrapper float_left">
                                <img src={a1} alt="about_img" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="x_about_seg_img_cont_wrapper float_left">
                                <h3>Our Story</h3>
                                <p>E - car  rental  gives  you  more  flexible  way  to  communicate   with  people  to  rent  vehicles and to  give  ride  sharing  facilities  in  modern  way.Our team try our best to give the people good approach for ride and car sharing.By investing in technology that takes the friction out of travel, E- car Rental services seamlessly connects millions of travelers to memorable experiences, a variety of transportation options, and incredible places to stay – from homes to hotels, and much more. As one of the world’s largest travel marketplaces for both established brands and entrepreneurs of all sizes, e - car rental enables properties around the world to reach a global audience and grow their businesses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* x about title Wrapper End */}
            {/*  counter Wrapper Start */}
            <div className="counto_main_wrapper">
                <div className="counto_img_overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <section className="counter-section section-padding">
                                <div className="row">
                                    <div className="trucking_counter">
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                            <div className="con con_right_border"> <i className="flaticon-car-trip" />
                                            </div>
                                            <div className="count-description"> <span className="timer">4</span>
                                                <h5 className="con1">qulified staff</h5>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                            <div className="con con_right_border con2 cont2 cont3"> <i className="flaticon-multiple-users-silhouette" />
                                            </div>
                                            <div className="count-description"> <span className="timer">1+</span>
                                                <h5 className="con2">Years Of Experience</h5>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                            <div className="con con_right_border con3 cont2"> <i className="flaticon-cup-of-hot-chocolate" />
                                            </div>
                                            <div className="count-description"> <span className="timer">100+</span>
                                                <h5 className="con3">Happy Clients</h5>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                            <div className="con con_right_border con4"> <i className="flaticon-mail-send" />
                                            </div>
                                            <div className="count-description"> <span className="timer">0</span>
                                                <h5 className="con4">Deserved Awards</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            {/*  counter Wrapper End */}
            {/* xs offer car tabs Start */}
            <div className="x_ln_car_main_wrapper float_left padding_tb_100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="x_ln_car_heading_wrapper float_left">
                                <h3>Our Core team</h3>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="btc_ln_slider_wrapper">
                                <div className="owl-carousel owl-theme">
                                    <div className="item">
                                        <div className="btc_team_slider_cont_main_wrapper">
                                            <div className="btc_team_img_wrapper">
                                                <img src={t1} alt="team_img1" height="635px"/>
                                                <div className="btc_team_social_wrapper">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-facebook" /></a>
                                                        </li>
                                                        <li><a href="#"><i className="fa fa-twitter" /></a>
                                                        </li>
                                                        <li><a href="#"><i className="fa fa-linkedin" /></a>
                                                        </li>
                                                        <li><a href="#"><i className="fa fa-google-plus" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="btc_team_img_cont_wrapper">
                                                <h4><a href="#">Manthan Patel</a></h4>
                                                <p>(CEO)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="btc_team_slider_cont_main_wrapper">
                                            <div className="btc_team_img_wrapper">
                                                <img src={t2} alt="team_img1" />
                                                <div className="btc_team_social_wrapper">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-facebook" /></a>
                                                        </li>
                                                        <li><a href="#"><i className="fa fa-twitter" /></a>
                                                        </li>
                                                        <li><a href="#"><i className="fa fa-linkedin" /></a>
                                                        </li>
                                                        <li><a href="#"><i className="fa fa-google-plus" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="btc_team_img_cont_wrapper">
                                                <h4><a href="#">Akash Prajapati</a></h4>
                                                <p>(CEO)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="btc_team_slider_cont_main_wrapper">
                                            <div className="btc_team_img_wrapper">
                                                <img src={t3} alt="team_img1" height="636px"/>
                                                <div className="btc_team_social_wrapper">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-facebook" /></a>
                                                        </li>
                                                        <li><a href="#"><i className="fa fa-twitter" /></a>
                                                        </li>
                                                        <li><a href="#"><i className="fa fa-linkedin" /></a>
                                                        </li>
                                                        <li><a href="#"><i className="fa fa-google-plus" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="btc_team_img_cont_wrapper">
                                                <h4><a href="#">Vipul Goriya</a></h4>
                                                <p>(Expert)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="btc_team_slider_cont_main_wrapper">
                                            <div className="btc_team_img_wrapper">
                                                <img src={t0} alt="team_img1" height="635px"/>
                                                <div className="btc_team_social_wrapper">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-facebook" /></a>
                                                        </li>
                                                        <li><a href="#"><i className="fa fa-twitter" /></a>
                                                        </li>
                                                        <li><a href="#"><i className="fa fa-linkedin" /></a>
                                                        </li>
                                                        <li><a href="#"><i className="fa fa-google-plus" /></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="btc_team_img_cont_wrapper">
                                                <h4><a href="#">Jeel Bhanvadiya</a></h4>
                                                <p>(Expert)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*js Start*/}
            {/* x counter Wrapper Start */}
          <HowItWorks/>
            {/* x counter Wrapper End */}
            {/* x booking Wrapper Start */}
        </div>

    );
}

export default About
