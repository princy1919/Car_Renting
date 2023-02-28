import React from "react";
import {connect} from "react-redux";
import {Loader} from "../../globalUtilities/Loader";
import {TitleHeader} from "../../Comman/TitleHeader";
import  {ViewAll,ActiveCar,InActiveCar,SoldCar} from "./userCars";
import {findRentalDetails,DeleteCarData,UpdateCarStatus,getBuyerDetail} from "../../actions";
import {toast} from "react-toastify";
import { Modal } from 'antd';

class MyCars extends React.Component{
    constructor(props){
        window.scrollTo(0, 0);
        super(props);
        this.state = {
            loading:false,
            id: this.props.token.auth._id,
            rentalData:[],
            ActiveRentalData:[],
            InactiveRentalData:[],
            soldData:[],
            visible:false,
            buyerDetails:{},
            isData:true
        }
    }

     componentDidMount() {
        const {id} = this.state;
        this.getDetails(id)
    }

    getDetails =(id) =>{
        this.setState({loading:true},async ()=>{
            const response  = await findRentalDetails(id);
            if(response && response.data && response.data.length){
                const data = response.data;
                const available = response.data.filter(v => v.status === "available")
                const noAvailable = response.data.filter(v => v.status === "noavailable")
                const sold = response.data.filter(v => v.status === "sold")
                this.setState({
                    rentalData:data,
                    loading:false,
                    isData:true,
                    ActiveRentalData:available,
                    InactiveRentalData:noAvailable,
                    soldData:sold
                })
            }else {
                this.setState({loading:false,isData:false})
            }
        })
    };

    async componentWillReceiveProps(nextProps, nextContext) {
        if(this.props.token !== nextProps.token ) {
            this.setState({id:nextProps.token.auth._id});
            this.getDetails(nextProps.token.auth._id)
        }
    }

    delete =async(id)=>{
        const res = await DeleteCarData(id);
        if(res === "success"){
            toast.success(`Delete successfully!`, {
                position: toast.POSITION.TOP_RIGHT
            });
            await this.getDetails(this.state.id)
        }
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,buyerDetails:{}
        });
    };

    fetchBuyerDetails =  (id) => {
        this.setState({loading:true},async ()=>{
            const res = await getBuyerDetail(id)
            if(res && res.data && res.data.length){
                this.setState({buyerDetails:res.data[0],visible:true,loading:false})
            }else{
                this.setState({loading:false})
                toast.error("something went wrong")
            }
        })
    }

    deaActive=async(id)=>{
        const data = {status:"noavailable",id:id};
        const res = await  UpdateCarStatus(data);
        if(res){
            toast.success(`Updated successfully!`, {
                position: toast.POSITION.TOP_RIGHT
            });
                await this.getDetails(this.state.id)
        }
    };

    active=async(id)=>{
        const data = {status:"available",id:id};
        const res = await UpdateCarStatus(data);
        if(res){
            toast.success(`Updated successfully!`, {
                position: toast.POSITION.TOP_RIGHT
            });
            await this.getDetails(this.state.id)
        }
    };

    render() {
        const { loading,rentalData,ActiveRentalData,InactiveRentalData,isData,soldData,visible,buyerDetails } = this.state;
        return (
            <div>
                {loading ? <Loader/> : null }
                <TitleHeader title="MyCars" link="my cars"/>
                <div className="container emp-profile" style={{paddingTop:"0px"}}>
                    <Modal
                        title="Buyer Details"
                        visible={visible}
                        onOk={this.handleCancel}
                        onCancel={this.handleCancel}
                    >
                        <p><b>Name : </b> &nbsp; {buyerDetails.firstName || ""} {buyerDetails.lastName}</p>
                        <p><b>Email : </b> &nbsp; {buyerDetails.email || ""}</p>
                        <p><b>Mobile : </b> &nbsp; {buyerDetails.mobile || ""}</p>
                        <p><b>Aadhar Number : </b> &nbsp; {buyerDetails.aadharNumber || ""}</p>
                        <p><b>DrivingLicenceNumber : </b> &nbsp; {buyerDetails.drivingLicenceNumber || ""}</p>
                        <p><b>Address : </b> &nbsp; {buyerDetails.address || ""}</p>
                        <p><b>Country : </b> &nbsp; {buyerDetails.country || ""}</p>
                        <p><b>State : </b> &nbsp; {buyerDetails.state || ""}</p>
                        <p><b>City : </b> &nbsp; {buyerDetails.city || ""}</p>
                    </Modal>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-2" align="center" style={{marginTop: "48px"}}>
                                        <strong>Filter By :</strong>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="profile-head">
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item" >
                                                    <a
                                                        className="nav-link active"
                                                        id="home-tab" data-toggle="tab"
                                                        href="#viewall"
                                                        role="tab" aria-controls="home"
                                                        aria-selected="true"
                                                    >
                                                        View All ({rentalData.length})
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        id="profile-tab"
                                                        data-toggle="tab"
                                                        href="#activecar"
                                                        role="tab"
                                                        aria-controls="profile"
                                                        aria-selected="false"
                                                    >
                                                        Active Car ({ActiveRentalData.length})
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link"
                                                       id="profile-tab"
                                                       data-toggle="tab"
                                                       href="#inactivecar"
                                                       role="tab"
                                                       aria-controls="profile"
                                                       aria-selected="false"
                                                    >
                                                        InActive Car ({InactiveRentalData.length})
                                                    </a>
                                                </li>
                                                <li className="nav-item" >
                                                    <a className="nav-link"
                                                       id="profile-tab"
                                                       data-toggle="tab"
                                                       href="#soldcar"
                                                       role="tab"
                                                       aria-controls="profile"
                                                       aria-selected="false"
                                                    >
                                                        Sold Car ({soldData.length})
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-2"/>
                                </div>

                                <div className="tab-content profile-tab" id="myTabContent">
                                    <div className="tab-pane fade show active" id="viewall" role="tabpanel" aria-labelledby="home-tab">
                                    <ViewAll fetchBuyerDetails={this.fetchBuyerDetails} rentalData={rentalData} onDelete={this.delete} deaActive={this.deaActive} active={this.active}/>
                                    </div>
                                    <div className="tab-pane fade" id="activecar" role="tabpanel"
                                         aria-labelledby="profile-tab">
                                        <ActiveCar rentalData={ActiveRentalData}/>
                                    </div>
                                    <div className="tab-pane fade" id="inactivecar" role="tabpanel" aria-labelledby="profile-tab">
                                        <InActiveCar rentalData={InactiveRentalData}/>
                                    </div>
                                    <div className="tab-pane fade" id="soldcar" role="tabpanel" aria-labelledby="profile-tab">
                                        <SoldCar rentalData={soldData}/>
                                    </div>
                                </div>
                                <div align="center">
                                   { isData ? null : <strong>Car Not Available</strong>}
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

export default connect(mapStateToProps)(MyCars);
