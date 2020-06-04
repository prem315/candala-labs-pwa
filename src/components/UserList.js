import React from "react";
import firebase from "../config";
import User from "./User";
import Modal from "./Modal";
import "../App.css";
import plusCircle from "../assets/plus-circle.svg";
import Navbar from "./Navbar";

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.ref = firebase.firestore().collection("users");

    this.unsubscribe = null;
    this.state = {
      isLoading: true,
      users: [],
      show: false,
      editShow: false,
      activeClient: null,
      show: false,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  onCollectionUpdate = (querySnapshot) => {
    const users = [];
    const self = this;
    querySnapshot.forEach((doc) => {
      const { name, age, gender } = doc.data();

      users.push({
        key: doc.id,
        //doc,
        name,
        age,
        gender,
      });

      self.setState({
        users,
      });
    });
    this.setState({
      users,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <>
        <div className="container" style={{ marginTop: "20px" }}>
          <div className="alert alert-primary" role="alert">
            Users will be directly stored into Firebase database and synced with
            the IndexedDb in the browser. User can access data offline.
          </div>
          <div className="row" style={{ color: "#fff" }}>
            <div className="col-md-12">
              <h1>Users</h1>
            </div>
          </div>
        </div>
        <div className="list-wrapper">
          <ul className="list">
            {this.state.users.map((user, index) => {
              return <User user={user} key={index} />;
            })}
          </ul>
        </div>

        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>

        <div onClick={this.showModal} className="add-user-btn">
          <img src={plusCircle} />
          <span className="add-user-btn-text">Add User</span>
        </div>
      </>
    );
  }
}

export default UserList;
