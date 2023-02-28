import React from "react";
import {Loader} from "../globalUtilities/Loader";
import {TitleHeader} from "../Comman/TitleHeader";
import {toast} from "react-toastify";
import {PostComment} from "../actions"

class ContactUs extends React.Component {
    state ={
        data:{firstName:"",lastName:"",email:"",phone:"",comment:""}
    }

    handleChange = (e) => {
        const { name , value } = e.target
        this.setState({data:{
                ...this.state.data,[name]:value
            }

        })
    }
    onSubmit = async () => {
        const phoneno = /^\d{10}$/;
        const { data } = this.state;
        if(!data.firstName){
            this.setState({firstNameError:"enter the firstname"})
        }else{
            this.setState({firstNameError:""})
        }
        if(!data.lastName){
            this.setState({lastNameError:"enter the lastname"})
        }else{
            this.setState({lastNameError:""})
        }
        if(!data.email){
            this.setState({emailError:"enter the email"})
        }else{
            this.setState({emailError:""})
        }
        if(!data.phone || data.phone.length < 10 || data.phone.length > 10){
            this.setState({phoneError:"enter valid mobile no"})
        }else{
            this.setState({phoneError:""})
        }
        if(!data.comment){
            this.setState({commentError:"enter the comment"})
        }else{
            this.setState({commentError:""})
        }
        if(!data.firstName || !data.lastName || !data.email || !data.phone || data.phone.length < 10 || data.phone.length > 10 || !data.comment){
            return
        }
        const res = await PostComment(data)
        if(res){
            this.setState({data:{firstName:"",lastName:"",email:"",phone:"",comment:""}},()=>{
                toast.success("Successfully post")
            })
        }else {
            toast.error("something went wrong")
        }
    }

    render() {
        const {firstNameError,lastNameError,emailError,phoneError,commentError,data } = this.state
        return (
            <div>
                <Loader/>
                <TitleHeader title="Contact Us" link="Contact Us"/>
                <div>
                    {/* xs offer car tabs Start */}
                    <div className="x_contact_title_main_wrapper float_left padding_tb_100">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="x_offer_car_heading_wrapper x_offer_car_heading_wrapper_contact float_left">
                                        <h4>get in touch</h4>
                                        <h3>Contact Info</h3>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 full_width">
                                    <div className="x_contact_title_icon_cont_main_box">
                                        <div className="x_contact_title_icon">	<i className="fa fa-map-marker" />
                                        </div>
                                        <div className="x_contact_title_icon_cont">
                                            <h3><a href="#">address</a></h3>
                                            <p>IT Department,New Campus,L.E College Road,Morbi,363642</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 full_width">
                                    <div className="x_contact_title_icon_cont_main_box">
                                        <div className="x_contact_title_icon">	<i className="flaticon-phone-call" />
                                        </div>
                                        <div className="x_contact_title_icon_cont">
                                            <h3><a href="#">phone Number</a></h3>
                                            <p>+918866618830
                                                <br />+919825622078</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 full_width">
                                    <div className="x_contact_title_icon_cont_main_box">
                                        <div className="x_contact_title_icon">	<i className="flaticon-mail-send" />
                                        </div>
                                        <div className="x_contact_title_icon_cont">
                                            <h3><a href="#">Email Address</a></h3>
                                            <p><a href="#">vrgoriya@gmail.com</a>
                                                <br /><a href="#">akashpatel@gmail.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* map section start */}
                    <div className="map_main_wrapper">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14710.320613065916!2d70.846955!3d22.8180159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5af131d6b9f1efb3!2sLukhdhirji%20Engineering%20College%2C%20morbi!5e0!3m2!1sen!2sin!4v1586252552200!5m2!1sen!2sin"
                            width="800" height="600" frameBorder="0" style={{border:0,width:"100%"}} allowFullScreen=""
                            aria-hidden="false" tabIndex="0"/>

                    </div>
                    {/* map section End */}
                    {/* xs offer car tabs Start */}
                    <div className="x_contact_title_main_wrapper float_left padding_tb_100">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="x_offer_car_heading_wrapper x_offer_car_heading_wrapper_contact float_left">
                                        <h4>get in touch</h4>
                                        <h3>Leave A Message</h3>
                                    </div>
                                </div>
                                <div className="col-xl-5 offset-xl-1 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="contect_form1">
                                        <input
                                               type="text"
                                               name="firstName"
                                               value={data.firstName || ""}
                                               onChange={this.handleChange}
                                               placeholder="First Name *"
                                        />
                                        <p style={{color:"red"}}>{firstNameError}</p>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="contect_form2">
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={data.lastName || ""}
                                            onChange={this.handleChange}
                                            placeholder="Last Name *"
                                        />
                                        <p style={{color:"red"}}>{lastNameError}</p>
                                    </div>
                                </div>
                                <div className="col-xl-5 offset-xl-1 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="contect_form2">
                                        <input
                                            type="email"
                                            name="email"
                                            value={data.email || ""}
                                            onChange={this.handleChange}
                                            placeholder="Email *"
                                        />
                                        <p style={{color:"red"}}>{emailError}</p>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <div className="contect_form2">
                                        <input
                                            type="number"
                                            name="phone"
                                            value={data.phone || ""}
                                            onChange={this.handleChange}
                                            placeholder="Phone *" />
                                        <p style={{color:"red"}}>{phoneError}</p>
                                    </div>
                                </div>
                                <div className="col-xl-10 offset-xl-1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="contect_form4">
                                        <textarea
                                            rows={4}
                                            name="comment"
                                            value={data.comment || ""}
                                            onChange={this.handleChange}
                                            placeholder="Write Comment"
                                            defaultValue={""}
                                        />
                                        <p style={{color:"red"}}>{commentError}</p>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="contect_btn contect_btn_contact">
                                        <ul>
                                            <li><a onClick={this.onSubmit}>Send Message <i className="fa fa-arrow-right" /></a>
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

export default ContactUs
