import React from "react";
import man from "../assets/man.svg";
import woman from "../assets/woman.svg";
import trashcan from "../assets/trashcan.svg";

const User = ({ user }) => {
  return (
    <li className="list-item">
      <div>
        {user.gender === "male" ? (
          <img src={man} className="list-item-image" />
        ) : (
          <img src={woman} className="list-item-image" />
        )}
      </div>
      <div className="list-item-content">
        <h4>{user.name}</h4>
        <p>
          {user.gender} | {user.age}
        </p>
      </div>
    </li>
  );
};

export default User;
