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
        <Navbar />
        <div class="list-wrapper">
          <ul class="list">
            {this.state.users.map((user) => {
              return <User user={user} />;
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
