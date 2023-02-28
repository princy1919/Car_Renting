import React from "react";
import {Redirect} from "react-router-dom"
import logo from "../assets/images/logo.png"
import MobileHeader from "./MobileHeader";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {SignOut,CreateJourneyPost} from "../Components/Modals";
import {UploadCarImages, CreatePost, profileImage} from "../actions";
import {toast} from "react-toastify";
import {Loader} from "../globalUtilities/Loader";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            username:this.props.token.auth.firstName || "",
            id:this.props.token.auth._id || "",
            isLogout:false,
            isShare:false,
            redirect:false,
            loading:false,
            journeyData:{status:true,userId:this.props.token.auth._id,journeyDetails:{time:"am"}}
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
            this.setState({username:nextProps.token.auth.firstName,journeyData:{...this.state.journeyData,userId:nextProps.token.auth._id}})
    }

    onImageChange =  async (event) => {
        const { files } = event.target;
        const url = URL.createObjectURL(files[0]);
        const imageUrl = {
            image: files[0],
            imagePreview: url,
            isImageUpload: true
        };
            const res = await profileImage(imageUrl);
            if (res && res.data && res.data.photo) {
                this.setState({
                    journeyData:{...this.state.journeyData,photo:res.data.photo},loading:false
                },()=> {
                    toast.success(`image uploaded successfully`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                })
            } else {
                this.setState({loading:false},()=>{
                    toast.error(`image is not uploaded!`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                })
            }
    };


    signOut = ()=> {
        this.setState({isLogout:false},()=>{
            localStorage.removeItem("token");
            localStorage.removeItem("total");
            localStorage.removeItem("insuranceSum");
            localStorage.removeItem("gpsSum");
            localStorage.removeItem("journeyDetails");
        })
    };

    handleCancel = () => {
        this.setState({isLogout:false,isShare:false})
    };

    onHandleChange =(e,v)=>{
        if(v){
            this.setState({
                journeyData:{...this.state.journeyData,[v]:e}
            })
        }
        else{
            const {name,value} = e.target;
            this.setState({
                journeyData:{...this.state.journeyData,[name]:value}
            })
        }
    };

    onHandleDetailsChange =(e,v)=>{
        if(v){
            this.setState({
                journeyData:{...this.state.journeyData,journeyDetails:{...this.state.journeyData.journeyDetails,[v]:e}}
            })
        }
        else{
            const {name,value} = e.target;
            this.setState({
                journeyData:{...this.state.journeyData,journeyDetails:{...this.state.journeyData.journeyDetails,[name]:value}}
            })
        }
    };

    onCreate = async () => {
      const res = await CreatePost(this.state.journeyData)
        if(res){
            this.setState({isShare:false},()=>{
                toast.success("Successfully created")
            })
        }else{
            toast.error("Something went wrong")
        }
    };

    render() {
        const { isLogout,isShare,journeyData,loading} = this.state;
        return (
            <div className="hs_navigation_header_wrapper">
                <div className="container">
                    <div className="row cus-row">
                        <div className=" col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="hs_logo_wrapper d-none d-sm-none d-xs-none d-md-block">
                                <Link to="/">
                                    <img src={logo} className="img-responsive" alt="logo" title="Logo" />
                                </Link>
                            </div>
                        </div>
                        {loading ? <Loader/> : null}
                        <SignOut isLogout={isLogout} handleCancel={this.handleCancel} signOut={this.signOut}/>
                        <CreateJourneyPost
                            isShare={isShare}
                            onHandleChange ={this.onHandleChange}
                            onHandleDetailsChange={this.onHandleDetailsChange}
                            handleCancel={this.handleCancel}
                            onImageChange={this.onImageChange}
                            data={journeyData}
                            onCreate={this.onCreate}
                        />
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                            <nav className="hs_main_menu d-none d-sm-none d-xs-none d-md-block">
                                <ul>
                                    <li>
                                        <div className="dropdown-wrapper menu-button">
                                            <Link className="menu-button" to="/">Home</Link>
                                        </div>
                                    </li>
                                    <li> <a className="menu-button single_menu" href="/about-us">About</a></li>
                                    <li> <a className="menu-button single_menu" href="/contact-us">Contact Us</a></li>

                                    { localStorage.getItem("token")
                                        ?  <li>
                                            <div className="dropdown-wrapper menu-button">
                                                <a className="menu-button" href="#" >Welcome, {this.state.username} </a>
                                                <div className="drop-menu">
                                                    <Link className="menu-button" to="/profile">Profile</Link>
                                                    <Link className="menu-button" to="/mycar">My Cars</Link>
                                                    {/*<Link className="menu-button" to="">Journey Post</Link>*/}
                                                    <Link className="menu-button" onClick={()=>{this.setState({isShare:true})}}>Create Journey Post</Link>
                                                    <Link className="menu-button" onClick={()=>{this.setState({isLogout:true})}}>Logout</Link>
                                                </div>
                                            </div>
                                        </li>
                                        : null
                                    }
                                    <li>

                                        <Link className="menu-button single_menu" to="/rent-car">
                                            <div><i className="fa fa-camera" aria-hidden="true"/> Rent</div>
                                        </Link>
                                    </li>
                                    <li>

                                        <Link className="menu-button single_menu" to="/journey">
                                            <div title="join Journey">+Join</div>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <MobileHeader/>
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

export default connect(mapStateToProps)(Header);
