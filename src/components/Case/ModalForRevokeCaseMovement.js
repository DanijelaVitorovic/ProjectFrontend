import React, { Component } from "react";
import { Modal, ModalFooter, Card, Container } from "react-bootstrap";
import { getEmployeeName } from "../../globals";
import { modalForAddProcessorTranslation } from "../../translations.js";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";

class ModalForRevokeCaseMovement extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      caseName: "",
      caseNumber: "",
      caseType: "",
      caseState: "",
      refersTo: {
        id: 0,
      },
      owner: {
        id: 0,
      },
      processor: {
        id: 0,
      },

      errors: {},
    };
  }

  componentDidMount() {
    const {
      id,
      caseName,
      caseNumber,
      caseState,
      caseType,
      owner,
      processor,
      refersTo,
    } = this.props.caseForUpdate;

    this.setState({
      id,
      caseName,
      caseNumber,
      caseState,
      caseType,
      owner,
      processor,
      refersTo,
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onChangeCombo = (e) => {
    this.setState({ [e.target.name]: { id: e.target.value } });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.resetError();
    this.props.handleRevokingCaseMovement(this.props.caseForUpdate);
  };

  render() {
    const {
      showModalForRevokeCaseMovement,
      error,
      employeeList,
      closeModalForRevokingCaseMovement,
    } = this.props || {};

    return (
      <Modal
        show={showModalForRevokeCaseMovement}
        onHide={closeModalForRevokingCaseMovement}
        onRequestClose={closeModalForRevokingCaseMovement}
        size="sm"
        centered
        animation
      >
        <Card bg={"white"} text={"black"} style={{ paddingBottom: 20 }}>
          {error && (
            <Container
              className="col-md-12 text-center "
              style={{ paddingTop: 20 }}
            >
              <div className="row">
                <div
                  className="col-md-8 m-auto"
                  style={{
                    color: "white",
                    paddingLeft: 60,
                    paddingRight: 60,
                    background: "#EA5252",
                  }}
                >
                  {error.message}
                </div>
              </div>
            </Container>
          )}
          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <br />
                  <form onSubmit={this.onSubmit}>
                    <p className="text-center">Да ли сте сигурни?</p>
                    <Button
                      variant="contained"
                      color="default"
                      startIcon={<YoutubeSearchedForIcon />}
                      onClick={closeModalForRevokingCaseMovement}
                    >
                      Не
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                      type="submit"
                    >
                      Да!
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Modal>
    );
  }
}

export default ModalForRevokeCaseMovement;
