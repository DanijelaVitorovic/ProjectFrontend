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
import ProcessList from "./components/Containers/ProcessList";
import AddProcess from "./components/Process/AddProcess";
import UpdateProcess from "./components/Process/UpdateProcess";
import LegalEntityList from "./components/Containers/LegalEntityList";
import AddLegalEntity from "./components/LegalEntity/AddLegalEntity";
import UpdateLegalEntity from "./components/LegalEntity/UpdateLegalEntity";
import ProcessTypeList from "./components/Containers/ProcessTypeList";
import AddProcessType from "./components/ProcessType/AddProcessType";
import UpdateProcessType from "./components/ProcessType/UpdateProcessType";
import EmployeeList from "./components/Containers/EmployeeList";
import UpdateEmployee from "./components/Employee/UpdateEmployee";
import AddEmployee from "./components/Employee/AddEmployee";
import PhysicalEntityList from "./components/Containers/PhysicalEntityList";
import AddPhysicalEntity from "./components/PhysicalEntity/AddPhysicalEntity";
import UpdatePhysicalEntity from "./components/PhysicalEntity/UpdatePhysicalEntity";
import ModalAddProcesType from "./components/ProcessType/ModalAddProcesType";
import OrganizationalUnitList from "./components/Containers/OrganizationalUnitList";
import CaseList from "./components/Containers/CaseList";
import DocumentList from "./components/Containers/DocumentList";
import CaseClassificationList from "./components/Containers/CaseClassificationList";
import DocumentProcessing from "./components/Document/DocumentProcessing";
import CaseProcessingList from "./components/Case/CaseProcessingList";
import MenuBarUsers from "./components/MenuBar/MenuBarUserNotAuthenticated";
import DocumentAttachmentList from "./components/Containers/DocumentAttachmentList";
import DocumentTypeList from "./components/Containers/DocumentTypeList";
import DocumentTypeAttachmentList from "./components/Containers/DocumentTypeAttachmentList";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DocumentClassificationList from './components/Containers/DocumentClassificationList';
import './i18n';
import i18next from 'i18next';

var jwtDecode = require("jwt-decode");

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwtDecode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken,
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = '/';
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      darkMode: false,
    };
  }

  handleDarkMode = () => {
    this.setState({darkMode: !this.state.darkMode});
  };

  render() {
    const darkTheme = createMuiTheme({
      palette: {
        type: 'dark',
        primary: {
          main: '#F783AC',
        },
        secondary: {
          main: '#FF4081',
        },
      },
    });

    const lightTheme = createMuiTheme({
      palette: {
        type: 'light',
      },
    });

    return (
      <ThemeProvider theme={this.state.darkMode ? darkTheme : lightTheme}>
        <Paper style={{height: '100vh'}}>
          <Provider store={store}>
            <Router>
              <div className="App">
                <Header
                  darkMode={this.state.darkMode}
                  handleDarkMode={this.handleDarkMode}
                />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={Login} />
                <div> 
                </div>
                <Switch>
                  <SecuredRoute exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/addUser" component={AddUser} />
                  <Route exact path="/userList" component={UserList} />
                  <Route exact path="/processList" component={ProcessList} />
                  <Route exact path="/addProcess" component={AddProcess} />
                  <Route exact path="/updateUser/:id" component={UpdateUser} />
                  <Route
                    exact
                    path="/updateProcess/:id"
                    component={UpdateProcess}
                  />
                  <Route
                    exact
                    path="/organizationalUnitList"
                    component={OrganizationalUnitList}
                  />

                  <Route
                    exact
                    path="/organizationalUnitList"
                    component={OrganizationalUnitList}
                  />

                  <Route exact path="/documentList" component={DocumentList} />
                  <Route
                    exact
                    path="/organizationalUnitList"
                    component={OrganizationalUnitList}
                  />
                  <Route
                    exact
                    path="/documentProcessing/:id"
                    component={DocumentProcessing}
                  />
                  <Route
                    exact
                    path="/addLegalEntity"
                    component={AddLegalEntity}
                  />
                  <Route
                    exact
                    path="/legalEntityList"
                    component={LegalEntityList}
                  />
                  <Route
                    exact
                    path="/processTypeList"
                    component={ProcessTypeList}
                  />
                  <Route
                    exact
                    path="/addProcessType"
                    component={AddProcessType}
                  />
                  <Route exact path="/updateUser/:id" component={UpdateUser} />
                  <Route
                    exact
                    path="/updateLegalEntity/:id"
                    component={UpdateLegalEntity}
                  />
                  <Route
                    exact
                    path="/updateProcessType/:id"
                    component={UpdateProcessType}
                  />
                  <Route exact path="/employeeList" component={EmployeeList} />
                  <Route
                    exact
                    path="/updateEmployee/:id"
                    component={UpdateEmployee}
                  />
                  <Route exact path="/addEmployee" component={AddEmployee} />
                  <Route
                    exact
                    path="/physicalEntityList"
                    component={PhysicalEntityList}
                  />
                  <Route
                    exact
                    path="/addPhysicalEntity"
                    component={AddPhysicalEntity}
                  />
                  <Route
                    exact
                    path="/updatePhysicalEntity/:id"
                    component={UpdatePhysicalEntity}
                  />
                  <Route exact path="/caseList" component={CaseList} />
                  <Route
                    exact
                    path="/caseClassificationList"
                    component={CaseClassificationList}
                  />
                  <Route
                    exact
                    path="/documentAttachmentList"
                    component={DocumentAttachmentList}
                  />

                  <Route
                    exact
                    path="/caseProcessingList/:id"
                    component={CaseProcessingList}
                  />

                  <Route
                    exact
                    path="/documentTypeList"
                    component={DocumentTypeList}
                  />

                  <Route
                    exact
                    path="/documentTypeAttachmentList/:id"
                    component={DocumentTypeAttachmentList}
                  />

                  <Route
                    exact
                    path="/documentClassificationList"
                    component={DocumentClassificationList}
                  />
                </Switch>
              </div>
              )
            </Router>
          </Provider>
        </Paper>
      </ThemeProvider>
    );
  }
}

export default App;
