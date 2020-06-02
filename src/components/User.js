import React from "react";
import man from "../assets/man.svg";
import woman from "../assets/woman.svg";
import trashcan from "../assets/trashcan.svg";

const User = ({ user }) => {
  return (
    <li class="list-item">
      <div>
        {user.gender === "male" ? (
          <img src={man} class="list-item-image" />
        ) : (
          <img src={woman} class="list-item-image" />
        )}
      </div>
      <div class="list-item-content">
        <h4>{user.name}</h4>
        <p>
          {user.gender} | {user.age}
        </p>
      </div>
    </li>
  );
};

export default User;
