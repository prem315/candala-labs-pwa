import React from "react";
import { getUsers, addUser } from "../Indexdb/userDb";
import User from "./User";
import { Link } from "react-router-dom";

// const UserListIndexedDb = () => {
//   return <div>User List IndexDB</div>;
// };

class UserListIndexedDb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      gender: "male",
      users: [],
      error: "",
      errMsg: "",
    };
  }
  componentDidMount() {
    getUsers((data) => {
      this.setState({ ...this.state, users: data });
    });
  }

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
    const userObj = {
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender,
    };
    addUser(userObj);

    this.setState({
      users: [...this.state.users, userObj],
    });
  };

  render() {
    return (
      <>
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="alert alert-primary" role="alert">
            Users will be directly stored into Users IndexedDb in the browser.
            User can access data offline.
          </div>

          <div className="row" style={{ color: "#fff" }}>
            <div className="col-md-12">
              <h1>Users</h1>
            </div>
            {this.state.error === true ? (
              <div className="alert alert-danger" role="alert">
                {this.state.errMsg}
              </div>
            ) : null}
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="container-box">
                <h1>Enter a new User</h1>
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
              </div>
            </div>

            <div className="col-md-6">
              <div className="list-wrapper">
                <ul className="list">
                  {this.state.users.map((user, index) => {
                    return <User user={user} key={index} />;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserListIndexedDb;
