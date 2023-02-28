import React from "react";
import {Link} from "react-router-dom";

export const TitleHeader = ({title,link,other}) => {
    return(
        <div className="btc_tittle_main_wrapper">
            <div className="btc_tittle_img_overlay" />
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 full_width">
                        <div className="btc_tittle_left_heading">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 full_width">
                        <div className="btc_tittle_right_heading">
                            <div className="btc_tittle_right_cont_wrapper">
                                <ul>
                                    <li><Link to="/">Home</Link>  <i className="fa fa-angle-right" /></li>
                                    {other ? <li><Link to="/booking">Cars</Link>  <i className="fa fa-angle-right" /></li> : null}
                                    <li>{link}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}