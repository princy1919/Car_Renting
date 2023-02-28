import React from "react";
import {Loader} from "../globalUtilities/Loader";
import {TitleHeader} from "../Comman/TitleHeader";
import {toast} from "react-toastify";
import {resetPassword} from "../Services/actions/auth";
const queryString = require('query-string');

class ResetPassword extends React.Component{
    constructor(props){
        window.scrollTo(0, 0);
        super(props);
        this.state = {
            loading:false,
            data:{confirmPass:"",password:""},
            confirmError:"",
            passError:""
        }
    }
componentDidMount() {
        if(!queryString.parse(this.props.location.search).token ){
          localStorage.removeItem("total");
          localStorage.removeItem("insuranceSum");
          localStorage.removeItem("gpsSum");
            this.props.history.push("/")
        }
}

    onChange =(e)=>{
        const {name,value} = e.target;
        this.setState({
            data:{...this.state.data,[name]:value}
        })
    };

    onSubmit = async () => {
        const { data } = this.state;
        if(!data.confirmPass){
            this.setState({confirmError:"Enter confirm password"})
        }else {
            this.setState({confirmError:""})
        }
        if(!data.password){
            this.setState({passError:"Enter password"})
        }else{
            this.setState({passError:""})
        }
        if(!data.confirmPass || !data.password){
            return
        }
        if(data.password === data.confirmPass){
            const payload = { password: data.password, token:queryString.parse(this.props.location.search).token };
            const res = await resetPassword(payload);
            if(res && res.success){
                toast.success(`${res.message}` || "sucessfully updated")
                this.props.history.push("/login")
            }else {
                toast.error("something went wrong")
            }

        }else{
            toast.error("password not match")
        }
    };

    render() {
        const {confirmError,passError,loading} = this.state;
        return(
            <div>
                {loading ? <Loader/> : null}
                <TitleHeader title="ResetPassword" link="resetpassword" other={false}/>
                <div className="x_partner_main_wrapper float_left padding_tb_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="x_offer_car_heading_wrapper float_left">
                                    <h3>RESET YOUR PASSWORD</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-12 col-sm-12 col-12">
                                {/* login_wrapper */}
                                <div className="login_wrapper">

                                    <div className="formsix-e">
                                        <div className="form-group i-password">
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                onChange={this.onChange}
                                                required
                                                placeholder="Password *"
                                            />
                                            <p style={{color:"red"}}>{passError}</p>
                                        </div>
                                    </div>
                                    <div className="formsix-e">
                                        <div className="form-group i-password">
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="confirmPass"
                                                onChange={this.onChange}
                                                required
                                                placeholder="confirm password *"
                                            />
                                            <p style={{color:"red"}}> {confirmError} </p>
                                        </div>
                                    </div>
                                    <div className="login_remember_box"/>
                                    <div className="login_btn_wrapper">
                                        <a onClick={this.onSubmit} className="btn btn-primary login_btn"> Save </a>
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

export default ResetPassword