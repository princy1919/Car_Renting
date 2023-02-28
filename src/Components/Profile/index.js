import React from "react";
import {connect} from "react-redux";
import {toast} from "react-toastify"
import {TitleHeader} from "../../Comman/TitleHeader";
import {ProfileData, UpdatewProfileData, updatePassword, profileImage} from '../../actions'
import {Loader} from "../../globalUtilities/Loader";
import {EditProfile,DisplayProfile} from "./Edit";
import {ChangePassword} from "./ChangePassword";
import ProfilePic from "../../assets/profile.png"
import {Button} from "reactstrap";

class Profile extends React.Component{
    constructor(props){
        window.scrollTo(0, 0);
        super(props);
        this.state = {
            loading:true,
            isEdit:false,
            id: this.props.token.auth._id,
            data:[],
            editData:{},
            profileData:{},
            editShow:true,
            isUpdate:false
        }
    }

    async componentDidMount() {
        if(this.state.id){
            const res =  await ProfileData(this.state.id);
            if(res){
                this.setState({profileData:res[0],loading:false})
            }else{
                this.setState({loading:false})
            }
        }
    }

    async componentWillReceiveProps(nextProps, nextContext) {
        if(this.props.token !== nextProps.token ) {
            this.setState({id:nextProps.token.auth._id});
            const res =  await ProfileData(nextProps.token.auth._id);
            if(res){
                this.setState({profileData:res[0],loading:false})
            }else{
                this.setState({loading:false})
            }
        }
    }

    update = () => {
        const {profileData} = this.state;
        this.setState({loading:true},async ()=>{
            const res = await UpdatewProfileData(profileData);
            if(res){
                this.setState({isEdit:false,isUpdate:false,loading:false},()=>{

                    toast.success(`Profile updated  successfully!`, {
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

    onPassChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    updatePassword = ()=> {
        const token = localStorage.getItem("token");
        const {newPass, conPass,oldPass} = this.state;
        if (!oldPass) {
            this.setState({oldPassError: "Plz enter old  password"})
        }
        if (!newPass) {
            this.setState({newPassError: "Plz enter password"})
        }
        if (!conPass) {
            this.setState({conPassError: "Plz enter confirm password"})
        }
        if (!oldPass || !newPass || !conPass) {
            return
        }
        if (newPass === conPass) {
            this.setState({loading:true},async ()=>{
                if (token) {
                    const res = await updatePassword(newPass);
                    if (res && res.data) {
                        this.setState({loading:false,oldPass:"",newPass:"",conPass:""},()=> {
                            toast.success(`${res.data.message || "your password is changed Successfully"}`, {
                                position: toast.POSITION.TOP_RIGHT
                            });
                        });
                    } else {
                        this.setState({loading:false},()=>{
                            toast.error(`something went wrong !`, {
                                position: toast.POSITION.TOP_RIGHT
                            })
                        });
                    }
                }
            })
        }
    };

    onInputChange =(e)=>{
        const {name,value} = e.target;
        this.setState({
            profileData:{
                ...this.state.profileData,[name]:value
            }})
    };


    onImageChange =  (event) => {
        const { files } = event.target;
        const url = URL.createObjectURL(files[0]);
        const imageUrl = {
            image: files[0],
            imagePreview: url,
            isImageUpload: true
        };
        this.setState({loading:true},async ()=> {
            const res = await profileImage(imageUrl);
            if (res && res.data && res.data.photo) {
                this.setState({
                    profileData:{...this.state.profileData,photo:res.data.photo},isUpdate:true,loading:false
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
        })
    };

    render() {
        const  { profileData,isEdit,oldPassError,newPassError,conPassError,editShow,isUpdate, conPass, newPass, oldPass } = this.state;
        return(
            <>
                {this.state.loading ? <Loader/> : null }
                <TitleHeader title="Profile" link="Profile"/>
                <div className="container emp-profile">
                    <div className="row">
                        <div className="col-md-4"/>
                        <div className="col-md-5">
                            <h5><strong>{profileData.firstName}&nbsp;{profileData.lastName}</strong></h5>
                        </div>
                        {
                            editShow
                                ? <div className="col-md-3" style={{marginTop:"-49px"}}>
                                    <div className="x_slider_checout_right">
                                        <ul>
                                            <li>
                                                <a
                                                    onClick={()=>{this.setState({isEdit:!this.state.isEdit})}}
                                                    style={{color:"white",cursor:"pointer"}}
                                                >
                                                    Edit Profile
                                                    <i className="fa fa-arrow-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                  </div>
                                : null
                        }
                    </div>
                    <form method="post">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-img">
                                    <img
                                        src={profileData.photo ? profileData.photo : ProfilePic}
                                        width={245}
                                        height={245}
                                        alt=""/>
                                    <div className="file btn btn-lg btn-primary">
                                        Change Photo
                                        <input
                                            type="file"
                                            name="file"
                                            onChange={this.onImageChange}
                                            style={{cursor:"pointer"}}
                                        />
                                    </div>
                                </div>
                                {
                                    isUpdate
                                        ? <Button
                                            className="badge-success"
                                            style={{marginLeft:"52px", width: "245px",cursor:"pointer"}}
                                            onClick={this.update}
                                        >
                                            Update
                                    </Button>
                                        : null }
                            </div>

                            <div className="col-md-6">
                                <div className="profile-head">

                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a
                                               className="nav-link active"
                                               id="home-tab" data-toggle="tab"
                                               onClick={()=>{this.setState({editShow:true})}}
                                               href="#information"
                                               role="tab" aria-controls="home"
                                               aria-selected="true"
                                            >
                                                Personal info
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link"
                                               id="profile-tab"
                                               data-toggle="tab"
                                               onClick={()=>{this.setState({editShow:false})}}
                                               href="#changepassword"
                                               role="tab"
                                               aria-controls="profile"
                                               aria-selected="false"
                                            >
                                                Change Password
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content profile-tab" id="myTabContent">
                                    {
                                        isEdit
                                            ?
                                            <EditProfile
                                                profileData={profileData}
                                                onInputChange = {this.onInputChange}
                                                update = { this.update }
                                            />
                                            :
                                            <DisplayProfile profileData={profileData} />
                                    }
                                    <ChangePassword
                                        oldPass = {oldPass}
                                        newPass = {newPass}
                                        conPass = {conPass}
                                        oldPassError = {oldPassError}
                                        newPassError = {newPassError}
                                        conPassError = {conPassError}
                                        onPassChange = {this.onPassChange}
                                        updatePassword = {this.updatePassword}
                                    />
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state
    }
};

export default connect(mapStateToProps)(Profile);
