import React from "react";
import logo from "../assets/images/footer_logo.png";
import { Link } from "react-router-dom";
const Footer = () => (
  <div>
    <div className="x_footer_top_main_wrapper float_left">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="x_footer_top_left float_left">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="x_footer_top_right float_left">
              <div className="x_footer_top_title_box">
                <div className="x_footer_top_title_box_icon_cont">
                  {" "}
                  <i className="flaticon-phone-call" />
                  <a href="/contact-us" color="white">
                    {" "}
                    <h3>Contact our Office</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="x_footer_bottom_main_wrapper float_left">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="x_footer_bottom_box_wrapper float_left">
              <h3>About Us</h3>
              <p>
                E - car rental gives you more flexible way to communicate with
                people to rent vehicles and to give ride sharing facilities in
                modern way.Our team try our best to give the people good
                approach for ride and car sharing.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="x_footer_bottom_box_wrapper_second float_left">
              <h3>Information</h3>
              <ul>
                <li>
                  <a href="/about-us">
                    <i className="fa fa-long-arrow-right" /> &nbsp; About
                  </a>
                </li>
                <li>
                  <a href="/terms-conditions">
                    <i className="fa fa-long-arrow-right" /> &nbsp; Terms and
                    Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="x_footer_bottom_box_wrapper_third float_left">
              <h3>Have Questions?</h3>
              <div className="x_footer_bottom_icon_section float_left">
                <div className="x_footer_bottom_icon">
                  {" "}
                  <i className="flaticon-phone-call" />
                </div>
                <div className="x_footer_bottom_icon_cont">
                  <h4>Calling Number</h4>
                  <p>1234567897</p>
                </div>
              </div>
              <div className="x_footer_bottom_icon_section x_footer_bottom_icon_section2 float_left">
                <div className="x_footer_bottom_icon x_footer_bottom_icon2">
                  {" "}
                  <i className="flaticon-mail-send" />
                </div>
                <div className="x_footer_bottom_icon_cont">
                  <h4>Email Us</h4>
                  <p>
                    <a href="#">test@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="x_copyr_main_wrapper float_left">
      <a href="/" id="return-to-top">
        <i className="fa fa-arrow-up" />
      </a>
      <div className="container">
        <p>Copyright © 2020 Expedia. All rights reserved.</p>
      </div>
    </div>
  </div>
);

export default Footer;
