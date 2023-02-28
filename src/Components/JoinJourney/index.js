import React from "react";
import { Col, Row,Input } from 'reactstrap';
import {Link} from "react-router-dom";
import { Modal,Button  } from 'antd';
import {toast} from "react-toastify";
import {connect} from "react-redux";
import {Loader} from "../../globalUtilities/Loader";
import {TitleHeader} from "../../Comman/TitleHeader";
import img from "../../assets/images/c1.png"
import {fetchJourneyPost,joinJourney} from "../../actions"
const { confirm } = Modal;

class JoinJourney extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            list:[],
            length:0,
            visible:false,
            id:""
        }
    }
    async componentDidMount() {
        this.setState({loading:true},async ()=>{
            const res = await fetchJourneyPost()
            if(res && res.length){
                this.setState({list:res,length:res.length,loading:false,seat:0})
            }else{
                this.setState({loading:false})
            }
        })
    }

    handleOk = async () => {
        const {_id,emailId,mobile} = this.props.token.auth
        const { seat,availableSeat } = this.state
        if(!localStorage.getItem("token")){
            return toast.error("Plz login")
        }
        if(!_id, !emailId , !mobile){
            return toast.error("something went wrong")
        }
        if(seat <= availableSeat ){
            const data = {
                id:this.state.id,
                joinUserId:_id,
                email:emailId,
                mobile:mobile,
                seat:parseInt(this.state.seat)
            }
            this.setState({loading:true},async ()=>{
                const res = await joinJourney(data)
                if(res){
                    toast.success("Successfully,Check your mail and get journey Details")
                    await this.componentDidMount()
                }else {
                    this.setState({loading:true})
                    toast.error("something went wrong")
                }
            })
        }else{
            alert(`plz select between 0 to ${availableSeat}`)
        }
        this.setState({visible:false,id:""})
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };


    render() {
        const { list , loading, length , visible} = this.state
        return(
            <div>
                {loading ? <Loader/> : null}
                <TitleHeader title="Join Journey" link="Join Journey" other={false}/>
                <Row style={{marginBottom:"50px",textAlign:"center"}}>
                    {length <= 0 ?
                        <h2
                            style={{marginLeft: "21%", marginTop: "5%"}}
                        >Not Available</h2>
                        : null}
                </Row>

                <Row style={{marginBottom:"50px"}}>
                    <Modal
                        visible={visible}
                        title="Are you sure for Join Journey?"
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={[
                            <Button key="back" onClick={this.handleCancel}>
                                cancle
                            </Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                                Submit
                            </Button>,
                        ]}
                    >
                       <Input type="number" placeholder="Enter no of seat" onChange={(e)=> {
                           this.setState({seat: e.target.value})
                       }}/>
                    </Modal>

                    <Col xs={1} md={1} sm={0} />
                    <Col xs={9} md={9} sm={12}>
                        <Row>
                            {
                                list  && list.map((value, index) => (
                                    <div key={index} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="x_car_offer_main_boxes_wrapper float_left">
                                            <div className="x_car_offer_starts float_left"><i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star-o"/>
                                                <i className="fa fa-star-o"/>
                                            </div>
                                            <div className="x_car_offer_img float_left">
                                                <img src={value.photo || img} alt="img" width="22%"/>
                                            </div>
                                            <div className="x_car_offer_price float_left">
                                                <div className="x_car_offer_price_inner">
                                                    <h3>Rs {value.journeyDetails.rent}</h3>
                                                    <p><span>from</span>
                                                        <br/>/ per.</p>
                                                </div>
                                            </div>
                                            <div className="x_car_offer_heading float_left">
                                                <h2><a href="#"> {value.model}</a></h2>
                                                <p>{value.company}</p>
                                            </div>
                                            <div className="x_car_offer_heading float_left">
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-users"/><br/> &nbsp;{value.journeyDetails.seat}</a>
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-home"/> &nbsp;{value.journeyDetails.pickup}</a>
                                                    </li>
                                                    <li><a href="#"><i className="fa fa-clock-o"/> &nbsp;{value.journeyDetails.hours}:{value.journeyDetails.minute} {value.journeyDetails.time}</a>
                                                    </li>
                                                    <li>
                                                        <div className="nice-select" tabIndex={0}><span className="current"><i
                                                            className="fa fa-bars"/></span>
                                                            <ul className="list">
                                                                <li className="dpopy_li">
                                                                    <a href="#">Ava. Seats : {value.journeyDetails.seat}</a>
                                                                </li>
                                                                <li className="dpopy_li">
                                                                    <a href="#">PickUp : {value.journeyDetails.pickup}</a>
                                                                </li>
                                                                <li className="dpopy_li">
                                                                    <a href="#">Drop : {value.journeyDetails.dropLocation}</a>
                                                                </li>
                                                                <li className="dpopy_li">
                                                                    <a href="#">Date : {value.journeyDetails.date}</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="x_car_offer_bottom_btn float_left">
                                                <ul>
                                                    <li><Link  onClick={()=>{this.setState({visible:true,id:value._id,availableSeat:value.journeyDetails.seat})}}>+Join</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Row>

                    </Col>
                    <Col xs={1} md={1} sm={0}/>
                </Row>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        token: state
    }
};

export default connect(mapStateToProps)(JoinJourney);
