import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import LandingPage from "./components/Layout/LandingPage";
import Login from "./components/Security/Login";
import { logout } from "./actions/securityActions";
import { SET_CURRENT_USER } from "./actions/types";
import setJWTToken from "./securityUtils/setJWTToken";
import SecuredRoute from "./securityUtils/secureRoute";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";
import UpdateUser from "./components/User/UpdateUser";
import LegalEntityList from "./components/Containers/LegalEntityList";
import AddLegalEntity from "./components/LegalEntity/AddLegalEntity";
import UpdateLegalEntity from "./components/LegalEntity/UpdateLegalEntity";
import ProcessTypeList from "./components/Containers/ProcessTypeList";
import AddProcessType from "./components/ProcessType/AddProcessType";
import UpdateProcessType from "./components/ProcessType/UpdateProcessType";

var jwtDecode = require("jwt-decode");

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwtDecode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />

            <Switch>
              <SecuredRoute exact path="/dashboard" component={Dashboard} />
              <Route exact path="/addUser" component={AddUser} />
              <Route exact path="/userList" component={UserList} />
              <Route exact path="/addLegalEntity" component={AddLegalEntity} />
              <Route exact path="/legalEntityList" component={LegalEntityList} />
              <Route exact path="/processTypeList" component={ProcessTypeList} />
              <Route exact path="/addProcessType" component={AddProcessType} />
              <Route exact path="/updateUser/:id" component={UpdateUser} />
              <Route exact path="/updateLegalEntity/:id" component={UpdateLegalEntity} />
              <Route exact path="/updateProcessType/:id" component={UpdateProcessType} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
