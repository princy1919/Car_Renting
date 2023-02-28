import React from "react";
import {Link} from "react-router-dom";
import {toast} from "react-toastify"
import {Loader} from "../globalUtilities/Loader";
import {Register} from "../actions"
import {TitleHeader} from "../Comman/TitleHeader";
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

class SignUp extends React.Component{
    constructor(){
        window.scrollTo(0, 0);
        super();
        this.state = {
            loading:false,
          data:
              {
                  firstName:"",lastName:"",
                  emailId:"",mobile:"",
                  password:"",confirmPassword:""
                  ,country:"",state:"",
                  city:"",pincode:"",
                  gender:"",dob:""
              },
          errors:{}
        }
    }

    onChange =(e)=>{
        const {name,value} = e.target;
        this.setState({
            data:{...this.state.data,[name]:value}
        })
    };
    validation = (name, value) => {
        switch (name) {
            case 'firstName':
                if (!value) {
                    return 'firstName is require';
                } else {
                    return "";
                }
            case 'lastName':
                if (!value) {
                    return 'lastName is require';
                } else {
                    return "";
                }
            case 'emailId':
                if (!value) {
                    return 'emailId is require';
                } else {
                    return "";
                }
            case 'mobile':
                if (!value) {
                    return 'mobile number  is require';
                } else {
                    return ""
                }
            case 'password':
                if (!value) {
                    return 'password is require';
                } else {
                    return "";
                }
            case 'confirmPassword':
                if (!value) {
                    return 'confirmPassword is require';
                } else {
                    return "";
                }
            case 'gender':
                if (!value) {
                    return 'select gender';
                } else {
                    return "";
                }
            case 'dob':
                if (!value) {
                    return 'select date of birth';
                } else {
                    return "";
                }
            case 'country':
                if (!value) {
                    return 'countryname is require';
                } else {
                    return "";
                }
            case 'state':
                if (!value) {
                    return 'statename is require';
                } else {
                    return "";
                }
            case 'city':
                if (!value) {
                    return 'cityname is require';
                } else {
                    return "";
                }
            case 'pincode':
                if (!value) {
                    return 'pincode is require';
                } else {
                    return "";
                }
            default : {
                return "";
            }
        }
    };


    submit = async () =>{
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
            if(data.password === data.confirmPassword){
                this.setState({loading:true},async ()=>{
                    const response = await Register(data);
                    if (response && response.data) {
                        toast.success(`Your account created sucessfully`, {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        this.setState({loading:false})
                        this.props.history.push("/login");
                    } else {
                        this.setState({loading:false})
                        if(response && response.message){
                            toast.error( response.message.message || "Something went wrong!", {
                                position: toast.POSITION.TOP_RIGHT
                            })
                        }
                    }
                })
            }else{
                alert("password is not match");
            }
        }
    };

    render() {
        const {errors,loading} = this.state;
        return(
            <div>
                {loading ? <Loader/> : null}
                <TitleHeader title="Register" link="Register" other={false}/>
                <div className="x_partner_main_wrapper float_left padding_tb_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="x_offer_car_heading_wrapper float_left">
                                    <h4>Register Got Your Account</h4>
                                    <h3>NEW CUSTOMER REGISTER HERE</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-12 col-sm-12 col-12">
                                {/* login_wrapper */}
                                <div className="register_wrapper_box">
                                    <div className="register_left_form">
                                        <div className="jp_regiter_top_heading">
                                            <p>Fields with * are mandetory </p>
                                        </div>
                                        <Form>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="exampleEmail">First Name</Label>
                                                        <Input type="text" name="firstName"  onChange={this.onChange}  placeholder="First Name*" />
                                                        <p className="form-error">{errors.firstName}</p>
                                                    </FormGroup>

                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="examplePassword">Last Name</Label>
                                                        <Input type="text" name="lastName" onChange={this.onChange} placeholder="Last Name*"/>
                                                    </FormGroup>
                                                    <p className="form-error">{errors.lastName}</p>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="exampleEmail">Email</Label>
                                                        <Input type="text" name="emailId" onChange={this.onChange} placeholder="Email"/>
                                                    </FormGroup>
                                                    <p className="form-error">{errors.emailId}</p>
                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="examplePassword">Mobile Number</Label>
                                                        <Input type="number" name="mobile" onChange={this.onChange} placeholder="phone"/>
                                                    </FormGroup>
                                                    <p className="form-error">{errors.mobile}</p>
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="exampleCity">Password</Label>
                                                        <Input type="password" name="password" onChange={this.onChange} placeholder="password*"/>
                                                    </FormGroup>
                                                    <p className="form-error">{errors.password}</p>

                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="exampleState">Confirm Password</Label>
                                                        <Input type="password" name="confirmPassword" onChange={this.onChange} placeholder="re-enter password*" />
                                                    </FormGroup>
                                                    <p className="form-error">{errors.confirmPassword}</p>

                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="exampleCity">Date Of Birth</Label>
                                                        <Input type="date" name="dob" onChange={this.onChange}/>
                                                    </FormGroup>
                                                    <p className="form-error">{errors.dob}</p>

                                                </Col>
                                                <Col className="cus-radio" md={6}>
                                                    Gender : &nbsp;<input type="radio" name="gender" value="male" onChange={this.onChange}/>Male
                                                    &nbsp;<input type="radio" name="gender" value="female" onChange={this.onChange}/>Female
                                                    <p style={{color:"red",marginTop:"20px"}}>{errors.gender}</p>
                                                </Col>

                                            </Row>
                                            <Row form>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="exampleCity">country</Label>
                                                        <Input type="text" name="country" onChange={this.onChange} placeholder="country" />
                                                    </FormGroup>
                                                    <p className="form-error">{errors.country}</p>

                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="exampleState">State</Label>
                                                        <Input type="text" name="state" onChange={this.onChange}  placeholder="state" />
                                                    </FormGroup>
                                                    <p className="form-error">{errors.state}</p>

                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="exampleState">City</Label>
                                                        <Input type="text" name="city" onChange={this.onChange} placeholder="city"  />
                                                    </FormGroup>
                                                    <p className="form-error">{errors.city}</p>

                                                </Col>
                                                <Col md={6}>
                                                    <FormGroup>
                                                        <Label for="exampleState">Pincode</Label>
                                                        <Input type="text" name="pincode" onChange={this.onChange} placeholder="pincode" />
                                                    </FormGroup>
                                                    <p className="form-error">{errors.pincode}</p>

                                                </Col>
                                            </Row>
                                        </Form>
                                        <div className="login_btn_wrapper register_btn_wrapper login_wrapper register_wrapper_btn">
                                            <a onClick={this.submit} className="btn btn-primary login_btn"> register </a>
                                        </div>
                                        <div className="login_message">
                                            <p>Already a member? <Link to="/login"> Login Here </Link> </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="btm_txt_register_form">In case you are using a public/shared computer we recommend that you logout to prevent any un-authorized access to your account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SignUp
