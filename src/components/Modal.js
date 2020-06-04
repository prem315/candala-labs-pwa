import React from "react";
import firebase from "../config";
import "./modal.css";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      gender: "male",
      error: false,
      errMsg: "",
    };
  }
  addUser = () => {
    if (this.state.name.length < 3 || this.state.name.length === 0) {
      this.setState({
        error: true,
        errMsg: "Name can't be empty or less than two character",
      });

      setTimeout(() => {
        this.setState({
          error: false,
          errMsg: "",
        });
      }, 4000);
      return;
    }
    if (isNaN(this.state.age)) {
      this.setState({
        error: true,
        errMsg: "Age must be number",
      });

      setTimeout(() => {
        this.setState({
          error: false,
        });
      }, 4000);
      return;
    }
    const data = {
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender,
    };
    firebase.firestore().collection("users").doc(this.state.name).set(data);
    this.props.handleClose();
  };

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleSelectChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  render() {
    const showHideClassName = this.props.show
      ? "modal display-block"
      : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="container-box">
            <h1>Enter a new User</h1>
            {this.state.error === true ? (
              <div class="alert alert-danger" role="alert">
                {this.state.errMsg}
              </div>
            ) : null}
            Name:
            <input type="text" onChange={this.handleName} />
            Age:
            <input type="text" onChange={this.handleAge} />
            Gender:
            <select
              value={this.state.gender}
              onChange={this.handleSelectChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button onClick={this.addUser}>Add User</button>
            <button onClick={this.props.handleClose}>close</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Modal;
