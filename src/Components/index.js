import React, {Component, Suspense} from 'react';
import {Route, Switch, Redirect, BrowserRouter} from "react-router-dom"
import {ToastContainer} from "react-toastify";
import {connect} from "react-redux";
import {routes} from "../routes";

class DefaultLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">
        <div className="sk-spinner sk-spinner-pulse"/>
    </div>;


    render() {
        return (
            <div>
                <ToastContainer position="top-right" autoClose={3000} style={{zIndex: 1999}}/>

                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                    <route.component {...props} />
                                )}/>
                        ) : (null);
                    })
                    }
                    {}
                    <Redirect from="/" to="/"/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state
    }
};

export default connect(mapStateToProps)(DefaultLayout);

