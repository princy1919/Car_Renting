import React from "react";
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {toast} from "react-toastify"
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import {Loader} from "../globalUtilities/Loader";
import {TitleHeader} from "../Comman/TitleHeader";
import {Companies,Seats,Colors,FuelType,Facilities,Location,Transmission,years} from "../globalUtilities/CONST"
import {getCarDetail, UpdateCarData, RegisterCarOnRent, UploadCarImages} from '../actions'
import {DropdownList,Multiselect} from "react-widgets";

class RegisterCar extends React.Component{
    constructor(props){
        window.scrollTo(0, 0);
        super(props);
        this.state = {
            loading:false,
            id:this.props.match.params.id,
            title:{},
            isUpdate:false,
            data:
                {
                    userId: this.props.token.auth._id,
                    dateOfRegister:new Date(),
                    company:"",
                    color:"",
                    model:"",
                    fuelType:"",
                    seat:"",
                    vehicleNumber:"",
                    rentValue:"",
                    transmission:"",
                    country:"",
                    state:"",
                    city:"",
                    pinCode:"",
                    facilities:[],
                    status:"available",
                    description:"",
                },
            errors:{}
        }
    }

    async componentDidMount() {
        if(this.state.id){
            const res = await getCarDetail(this.state.id);
            if (res && res.data) {
                this.setState({
                    data: res.data[0],title:{name:"Edit Details",link:"edit details"},isUpdate:true
                })
            }
        }else{
            if(!localStorage.getItem("token")){
                toast.error("First You need to login", {
                    position: toast.POSITION.TOP_RIGHT
                });
                this.props.history.push("/")
            }else{
                this.setState({title:{name:"Rent Your Car",link:"rent car"}})
            }
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if(!this.state.data.userId){
            this.props.history.push("/")
        }
    }

    async componentWillReceiveProps(nextProps, nextContext) {
        if(this.props.token !== nextProps.token ) {
            this.setState({data:{...this.state.data,userId:nextProps.token.auth._id}});
        }
    }

    onImageChange = async (e) => {
        const {data} = this.state;
        const {files} = e.target;
        let moreFiles = Array.from(files);
        let more = data.moreImage || [];
        moreFiles.map((file) => {
            const url = URL.createObjectURL(file);
            more.push({
                image: file,
                imagePreview: url,
                isImageUpload: true
            });
        });
        this.setState({loading:true},async()=>{
            const res = await UploadCarImages(more);
            if (res && res.data) {
                this.setState({data: {...this.state.data, photos: res.data},loading:false},()=>{
                    toast.success(`Images uploaded successfully!`, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                })
            }else {
                this.setState({loading:false},()=>{
                    toast.error( "Something went wrong!", {
                        position: toast.POSITION.TOP_RIGHT
                    })
                })

            }
        })

    };


    onChange =(e,v)=>{
        if(v){
            this.setState({
                data:{...this.state.data,[v]:e}
            })
        }
        else if(v === "facilities"){
            const {data} = this.state;
            data.facilities.push(v)
            this.setState({data})
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
            case 'company':
                if (!value) {
                    return 'Company is require';
                } else {
                    return "";
                }
            case 'color':
                if (!value) {
                    return 'Color is require';
                } else {
                    return "";
                }
            case 'model':
                if (!value) {
                    return 'Model is require';
                } else {
                    return "";
                }
            case 'fuelType':
                if (!value) {
                    return 'Fuel Type  is require';
                } else {
                    return ""
                }
            case 'facilities':
                if (!value.length) {
                    return 'facilities  is require';
                } else {
                    return ""
                }
            case 'seat':
                if (!value) {
                    return 'Seat is require';
                } else {
                    return "";
                }
            case 'vehicleNumber':
                if (!value) {
                    return 'VehicleNumber is require';
                } else {
                    return "";
                }
            case 'rentValue':
                if (!value) {
                    return 'Rent Value is require';
                } else {
                    return "";
                }
            case 'transmission':
                if (!value) {
                    return 'Transmission is require';
                } else {
                    return "";
                }
            case 'country':
                if (!value) {
                    return 'Country name is require';
                } else {
                    return "";
                }
            case 'state':
                if (!value) {
                    return 'State name is require';
                } else {
                    return "";
                }
            case 'city':
                if (!value) {
                    return 'City name is require';
                } else {
                    return "";
                }
            case 'pinCode':
                if (!value) {
                    return 'pinCode is require';
                } else {
                    return "";
                }
            case 'description':
                if (!value) {
                    return 'description is require';
                } else {
                    return "";
                }
            default : {
                return "";
            }
        }
    };

    submit = async () =>{
        const {data,id} = this.state;
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
            if(id){
                data.id = id;
                const res = await UpdateCarData(data)
                if(res){
                    toast.success(`Updated successfully!`, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    this.setState({
                        isUpdate: false
                    }, () => {
                        this.props.history.push("/mycar")
                    })
                }
            }else{
                const res = await RegisterCarOnRent(data);
                if (res && res.data) {
                    toast.success(`Vehicle registarion  successfully!`, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    this.setState({
                        data: {}
                    }, () => {
                        this.props.history.push("/")
                    })
                } else {
                    toast.error((res && res.message) || "Something went wrong!", {
                        position: toast.POSITION.TOP_RIGHT
                    })
                }
            }
        }
    };

    render() {
        const {errors,loading,title,data,isUpdate} = this.state;
        return(
            <div>
                {loading ? <Loader/> : null}
                <TitleHeader title={title.name} link={title.link} other={false}/>
                <div className="x_partner_main_wrapper float_left padding_tb_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="x_offer_car_heading_wrapper float_left">
                                    <h4>Rent Your Car</h4>
                                    <h3>INCLUDE SOME DETAILS</h3>
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

                                        <Row>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleEmail">Companies</Label>
                                                    <DropdownList
                                                        onChange={(e)=>this.onChange(e,"company")}
                                                        value={data.company || "Select Company"}
                                                        data={Companies}
                                                    />
                                                    {/*<Input type="select"  className="select"  name="company"*/}
                                                    {/*       onChange={this.onChange}>*/}
                                                    {/*    <option value="">Select Company</option>*/}
                                                    {/*    {*/}
                                                    {/*        Companies && Companies.length && Companies.map((v, i) => {*/}
                                                    {/*            return (*/}
                                                    {/*                <option key={i} value={v}>{v}</option>*/}
                                                    {/*            )*/}
                                                    {/*        })*/}
                                                    {/*    }*/}
                                                    {/*</Input>*/}
                                                </FormGroup>
                                                <p className="form-error" style={{marginTop:"-2px"}}>{errors.company}</p>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="examplePassword">Colors</Label>
                                                    <DropdownList
                                                        onChange={(e)=>this.onChange(e,"color")}
                                                        value={data.color || "Select Color"}
                                                        data={Colors}
                                                    />
                                                </FormGroup>
                                                <p className="form-error" style={{marginTop:"-2px"}}>{errors.color}</p>
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleEmail">Model</Label>
                                                    <Input value={data.model} type="text" name="model" onChange={this.onChange}
                                                           placeholder="Enter Modal name...."/>
                                                </FormGroup>
                                                <p className="form-error">{errors.model}</p>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="examplePassword">Fuel Type</Label>
                                                    <DropdownList
                                                        onChange={(e)=>this.onChange(e,"fuelType")}
                                                        value={data.fuelType || "Select Fuel"}
                                                        data={FuelType}
                                                    />
                                                </FormGroup>
                                                <p className="form-error" style={{marginTop:"-2px"}}>{errors.fuelType}</p>
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleCity">Seats</Label>
                                                    <DropdownList
                                                        onChange={(e)=>this.onChange(e,"seat")}
                                                        value={data.seat || "Seating Capacity"}
                                                        data={Seats}
                                                    />
                                                </FormGroup>
                                                <p className="form-error" style={{marginTop:"-2px"}}>{errors.seat}</p>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleState">vehicle Number</Label>
                                                    <Input
                                                           type="text"
                                                           name="vehicleNumber"
                                                           value={data.vehicleNumber}
                                                           onChange={this.onChange}
                                                           placeholder="Enter Vehicle Number"
                                                    />
                                                </FormGroup>
                                                <p className="form-error">{errors.vehicleNumber}</p>
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleCity">Rent Value</Label>
                                                    <Input
                                                           type="number"
                                                           name="rentValue"
                                                           value={data.rentValue}
                                                           onChange={this.onChange}
                                                           placeholder="Enter Rent-Value per day"
                                                    />
                                                </FormGroup>
                                                <p className="form-error">{errors.rentValue}</p>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleCity">Transmission</Label>
                                                    <DropdownList
                                                        onChange={(e)=>this.onChange(e,"transmission")}
                                                        value={data.transmission || "Select Transmission"}
                                                        data={Transmission}
                                                    />
                                                </FormGroup>
                                                <p className="form-error" style={{marginTop:"-2px"}}>{errors.transmission}</p>
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleCity">Facilities</Label>
                                                    <Multiselect
                                                        data={Facilities}
                                                        value={data.facilities}
                                                        onChange={(e)=>this.onChange(e,"facilities")}
                                                        placeholder="Select Facilities"
                                                    />
                                                </FormGroup>
                                                <p className="form-error" style={{marginTop:"-2px"}}>{errors.facilities}</p>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleCity">Bag Spaces</Label>
                                                    <DropdownList
                                                        onChange={(e)=>this.onChange(e,"bagSpace")}
                                                        value={data.bagSpace || "Select Bag Space Capacity"}
                                                        data={Seats}
                                                    />
                                                </FormGroup>
                                                <p className="form-error" style={{marginTop:"-2px"}}>{errors.seat}</p>
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleCity">Country</Label>
                                                    <DropdownList
                                                        onChange={(e) => this.onChange(e, "country")}
                                                        placeholder="Select"
                                                        data={[
                                                            'India'
                                                        ]}
                                                    />
                                                </FormGroup>
                                                <p className="form-error">{errors.country}</p>
                                            </Col>
                                            <Col md={6}>
                                                <Label for="exampleCity">State</Label>
                                                <DropdownList
                                                    onChange={(e) => this.onChange(e, "state")}
                                                    placeholder="Select"
                                                    data={[
                                                        'Gujarat'
                                                    ]}
                                                />
                                                <p className="form-error">{errors.state}</p>
                                            </Col>
                                            <Col md={6}>
                                                <label>City/town</label>
                                                <DropdownList
                                                    onChange={(e) => this.onChange(e, "city")}
                                                    placeholder="Select"
                                                    data={Location}
                                                />
                                                <p className="form-error">{errors.city}</p>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleState">PinCode</Label>
                                                    <Input type="number" value={data.pinCode} name="pinCode" onChange={this.onChange} placeholder="Enter pinCode " />
                                                </FormGroup>
                                                <p className="form-error">{errors.pinCode}</p>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="exampleState">Images</Label>
                                                    <input
                                                        className="upload"
                                                        type="file"
                                                        id="morePic"
                                                        accept='image/*'
                                                        onChange={this.onImageChange}
                                                        multiple/>
                                                </FormGroup>
                                                <p className="form-error">{errors.photos}</p>
                                            </Col>
                                            {/*<Col md={6}>*/}
                                            {/*        <FormGroup>*/}
                                            {/*            <Label for="exampleState">pinCode</Label>*/}
                                            {/*            <Input*/}
                                            {/*                type="number"*/}
                                            {/*                value={data.modelYear}*/}
                                            {/*                name="modelYear"*/}
                                            {/*                onChange={this.onChange}*/}
                                            {/*                placeholder="Enter Model Year"*/}
                                            {/*            />*/}
                                            {/*        </FormGroup>*/}
                                            {/*        <p className="form-error">{errors.modelYear}</p>*/}
                                            {/*</Col>*/}
                                            <Col md={12} style={{marginTop: "17px"}}>
                                                <Label for="exampleState">Description</Label>
                                                <Input
                                                       type="textarea"
                                                       name="description"
                                                       onChange={this.onChange}
                                                       value={data.description}
                                                       id="exampleText"
                                                       placeholder="Description about your car."/>
                                                <p className="form-error">{errors.description}</p>
                                            </Col>
                                        </Row>
                                        <div className="login_btn_wrapper register_btn_wrapper login_wrapper register_wrapper_btn" style={{marginTop:"0px"}}>
                                            <a onClick={this.submit} className="btn btn-primary login_btn"> {this.state.isUpdate ? "Update" : "register"} </a>
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

const mapStateToProps = (state) => {
    return {
        token: state
    }
};

export default connect(mapStateToProps)(RegisterCar);
