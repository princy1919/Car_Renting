import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const token = localStorage.getItem("token");

class HeaderWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }
  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({ username: nextProps.token.auth.firstName });
  }

  render() {
    if (this.state.username) {
      return null;
    } else {
      return (
        <div className="x_top_header_wrapper float_left">
          <div className="container">
            <div className="x_top_header_left_side_wrapper float_left">
              <p>Call Us : 1234567890</p>
            </div>
            <div className="x_top_header_right_side_wrapper float_left">
              <div className="x_top_header_all_select_box_wrapper">
                <ul>
                  <li className="login">
                    <Link to="/login">
                      <i className="fa fa-power-off" /> &nbsp;&nbsp;login
                    </Link>
                  </li>
                  <li className="register">
                    <Link to="/signup">
                      <i className="fa fa-plus-circle" /> &nbsp;&nbsp;register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    token: state,
  };
};

export default connect(mapStateToProps)(HeaderWrapper);
