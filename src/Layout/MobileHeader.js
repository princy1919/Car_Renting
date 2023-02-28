import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/images/logo.png";
import {connect} from "react-redux";
import {CreateJourneyPost} from "../Components/Modals";
import {CreatePost, profileImage, UploadCarImages} from "../actions";
import {toast} from "react-toastify";

class MobileHeader extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            username:this.props.token.auth.firstName || "",
            isShare:false,
            journeyData:{status:true,userId:this.props.token.auth._id,journeyDetails:{time:"am"}}
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({username:nextProps.token.auth.firstName,journeyData:{...this.state.journeyData,userId:nextProps.token.auth._id}})
    }
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

    signOut = ()=> {
        localStorage.removeItem("token");
        localStorage.removeItem("total");
        localStorage.removeItem("insuranceSum");
        localStorage.removeItem("journeyDetails");
    };


render() {
    const { isShare,journeyData} = this.state;

    return (
        <header className="mobail_menu d-none d-block d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-6">
                        <div className="hs_logo">
                            <a href="/">
                                <img src={logo} alt="Logo" title="Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-6">
                        <div className="cd-dropdown-wrapper">
                            <a className="house_toggle" href="#0">
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="511.63px" height="511.631px" viewBox="0 0 511.63 511.631" style={{enableBackground: 'new 0 0 511.63 511.631'}} xmlSpace="preserve">
                                    <g>
                                        <g>
                                            <path d="M493.356,274.088H18.274c-4.952,0-9.233,1.811-12.851,5.428C1.809,283.129,0,287.417,0,292.362v36.545
																	c0,4.948,1.809,9.236,5.424,12.847c3.621,3.617,7.904,5.432,12.851,5.432h475.082c4.944,0,9.232-1.814,12.85-5.432
																	c3.614-3.61,5.425-7.898,5.425-12.847v-36.545c0-4.945-1.811-9.233-5.425-12.847C502.588,275.895,498.3,274.088,493.356,274.088z" />
                                            <path d="M493.356,383.721H18.274c-4.952,0-9.233,1.81-12.851,5.427C1.809,392.762,0,397.046,0,401.994v36.546
																	c0,4.948,1.809,9.232,5.424,12.854c3.621,3.61,7.904,5.421,12.851,5.421h475.082c4.944,0,9.232-1.811,12.85-5.421
																	c3.614-3.621,5.425-7.905,5.425-12.854v-36.546c0-4.948-1.811-9.232-5.425-12.847C502.588,385.53,498.3,383.721,493.356,383.721z" />
                                            <path d="M506.206,60.241c-3.617-3.612-7.905-5.424-12.85-5.424H18.274c-4.952,0-9.233,1.812-12.851,5.424
																	C1.809,63.858,0,68.143,0,73.091v36.547c0,4.948,1.809,9.229,5.424,12.847c3.621,3.616,7.904,5.424,12.851,5.424h475.082
																	c4.944,0,9.232-1.809,12.85-5.424c3.614-3.617,5.425-7.898,5.425-12.847V73.091C511.63,68.143,509.82,63.861,506.206,60.241z" />
                                            <path d="M493.356,164.456H18.274c-4.952,0-9.233,1.807-12.851,5.424C1.809,173.495,0,177.778,0,182.727v36.547
																	c0,4.947,1.809,9.233,5.424,12.845c3.621,3.617,7.904,5.429,12.851,5.429h475.082c4.944,0,9.232-1.812,12.85-5.429
																	c3.614-3.612,5.425-7.898,5.425-12.845v-36.547c0-4.952-1.811-9.231-5.425-12.847C502.588,166.263,498.3,164.456,493.356,164.456z
																	" />
                                        </g>
                                    </g>
                                    <g />
                                    <g />
                                    <g />
                                    <g />
                                    <g />
                                    <g />
                                    <g />
                                    <g />
                                    <g />
                                    <g />
                                    <g />
                                    <g />
                                    <g />
                                    <g />
                                    <g />
                                </svg>
                            </a>
                            {/* .cd-dropdown */}
                        </div>
                        <CreateJourneyPost
                            isShare={isShare}
                            onHandleChange ={this.onHandleChange}
                            onHandleDetailsChange={this.onHandleDetailsChange}
                            handleCancel={this.handleCancel}
                            data={journeyData}
                            onCreate={this.onCreate}
                            onImageChange={this.onImageChange}
                        />
                        <nav className="cd-dropdown">
                            <h2><a href="/">Xpedia</a></h2>
                            <a href="#0" className="cd-close">Close</a>
                            <ul className="cd-dropdown-content">
                                {
                                    localStorage.getItem("token")
                                    ?  <li className="has-children"> <a href="#">Welcome, {this.state.username}</a>
                                            <ul className="cd-secondary-dropdown is-hidden">
                                                <li className="go-back"><a href="#0">Menu</a></li>
                                                <li> <a href="/profile">Profile</a></li>
                                                <li> <a href="/mycar">My Cars</a></li>
                                                <Link className="menu-button" onClick={()=>{this.setState({isShare:true})}}>Create Journey Post</Link>

                                                <li> <a className="menu-button" href="/" onClick={this.signOut}>Logout</a></li>
                                            </ul>
                                            {/* .cd-secondary-dropdown */}
                                        </li>
                                    : <div>
                                            <li><a href="/login">Login</a></li>
                                            <li><a href="/signup">Registration</a></li>
                                      </div>
                                }
                                <li> <a href="/">Home</a></li>
                                <li> <a href="/about-us">About</a></li>
                                <li> <a href="/contact-us">Contact Us</a>
                                </li>
                                <li>
                                    <Link className="menu-button single_menu" to="/rent-car">
                                        <div><i className="fa fa-camera" aria-hidden="true"/> Rent</div>
                                    </Link>
                                </li>
                                <li>

                                    <a className="menu-button single_menu" href="/journey">
                                        <div title="join Journey">+Join</div>
                                    </a>
                                </li>
                            </ul>
                            {/* .cd-dropdown-content */}
                        </nav>
                    </div>
                </div>
            </div>
            {/* .cd-dropdown-wrapper */}
        </header>
    );
}
}

const mapStateToProps = (state) => {
    return {
        token: state
    }
};

export default connect(mapStateToProps)(MobileHeader);
