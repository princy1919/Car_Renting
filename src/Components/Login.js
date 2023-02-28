import React from "react";
import {Link} from "react-router-dom";
import {checkAuth, checkMail, forgotPassword} from "../Services/actions/auth";
import appConfig from "../config";
import {TitleHeader} from "../Comman/TitleHeader";
import {Loader} from "../globalUtilities/Loader";
import {toast} from "react-toastify";

class Login extends React.Component{
    constructor(props){
        window.scrollTo(0, 0);
        super(props);
        this.state = {
            loading:false,
            data:{email:"",password:""},
            emailError:"",
            passError:""
        }
    }

    onChange =(e)=>{
        const {name,value} = e.target;
        this.setState({
            data:{...this.state.data,[name]:value}
        })
    };

    onLogin = () => {
        const { data } = this.state;
        if(!data.email){
            this.setState({emailError:"Enter email"})
        }else {
            this.setState({emailError:""})
        }
        if(!data.password){
            this.setState({passError:"Enter password"})
        }else{
            this.setState({passError:""})
        }
        if(!data.email || !data.password){
            return
        }
        const send = {emailId:data.email, password:data.password};
        this.setState({loading:true},async ()=>{
            const response = await checkMail(send);
            if (response && response.data) {
                const token = response.data.token;
                localStorage.setItem("token", token);
                await checkAuth(token);
                appConfig.token = token;
                toast.success("Welcome")
                this.props.history.push('/');
            } else {
                this.setState({passError: "Invalid Password", emailError: "Invalid emailId Id",loading:false})
            }
        })

    };

    forgetPassword =  () =>{
      const {data}  = this.state;
      if(!data.email){
          alert("plz enter emailId")
      }else{
          this.setState({loading:true},async ()=>{
              const res= await forgotPassword(data.email);
              if(res && res.success){
                  toast.success(`${res.message}`);
                  this.setState({loading:false})
              }else {
                  this.setState({loading:false})
              }
          })
      }
    };

    render() {
        const {emailError,passError,loading} = this.state;
        return (
            <div>
                {loading ? <Loader/> : null}
                <TitleHeader title="Login" link="Login" other={false}/>
                <div className="x_partner_main_wrapper float_left padding_tb_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="x_offer_car_heading_wrapper float_left">
                                    <h3>LOGIN TO YOUR ACCOUNT</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-12 col-sm-12 col-12">
                                {/* login_wrapper */}
                                <div className="login_wrapper">

                                    <div className="formsix-pos">
                                        <div className="form-group i-email">
                                            <input
                                                   type="email"
                                                   className="form-control"
                                                   name="email"
                                                   onChange={this.onChange}
                                                   required
                                                   placeholder="Email *"
                                            />
                                            <p style={{color:"red"}}> {emailError} </p>
                                        </div>
                                    </div>
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
                                    <div className="login_remember_box">
                                        <label className="control control--checkbox">Remember me
                                            <input type="checkbox" />
                                            <span className="control__indicator" />
                                        </label>
                                        <a href="#" onClick={this.forgetPassword} className="forget_password">
                                            Forgot Password
                                        </a>
                                    </div>
                                    <div className="login_btn_wrapper">
                                        <a onClick={this.onLogin} className="btn btn-primary login_btn"> login </a>
                                    </div>
                                    <div className="login_message">
                                        <p>Don’t have an account ? <Link to="/signup"> Register Now </Link> </p>
                                    </div>
                                </div>
                                <p>In case you are using a public/shared computer we recommend that you logout to prevent any un-authorized access to your account</p>
                                {/* /.login_wrapper*/}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


 export default Login;
