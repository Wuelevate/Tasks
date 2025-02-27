import { useState } from "react";
import "./User.css";
import RegistrationForm from "./RegistrationForm";

export default function User() {
  let [users, setUsers] = useState([
    {
      fullName: "Aniruddha Lal Verma",
      userName: "@aniruddha-verma",
      password: "abcd"
    }
  ]);

  let addNewUser = (user) => {
    setUsers((currUsers) => [...currUsers, user]);
    // console.log("added new users");
  };

  return (
    <>
    
    <RegistrationForm addNewUser={addNewUser} />
    <hr></hr> 
      <div>
        <h3>All Users</h3>
        {users.map((user, idx) => (
            <div className="user" key={idx}>
            <span>Fullname: {user.fullName}</span>
            <br></br>
            <span>Username: {user.userName}</span>
            <br></br>
            <span>Password: {user.password}</span>
          </div>
        ))}
      </div>  
    </>
  );
}
