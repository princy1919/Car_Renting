import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DefaultLayout from "./Components";
import "react-widgets/dist/css/react-widgets.css";
import { checkAuth } from "./Services/actions/auth";
import { SearchBox } from "./Layout/SearchBox";
import HeaderWrapper from "./Layout/HeaderWrapper";
import Header from "./Layout/Header";
import { store } from "./Services/store";
import Footer from "./Layout/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import "antd/dist/antd.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentWillMount() {
    await checkAuth();
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <SearchBox {...this.props} />
          <HeaderWrapper {...this.props} />
          <Header {...this.props} />
          <Switch>
            <Route
              path="/"
              name="Home"
              component={DefaultLayout}
              {...this.props}
            />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
