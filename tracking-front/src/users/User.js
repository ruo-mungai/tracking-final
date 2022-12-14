import React, { useEffect, useState } from "react";
import AdminBar from "../components/shared/AdminBar";
import UserTable from "./UserTable";

function User() {
// set state
  const [users, setUsers] = useState([]);

// first data grab
  useEffect(() => {
    fetch("/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data)
      });
  }, []);

// update customers on page after edit
  function onUpdateUser() {
    const updatedUser = users.map(
      user=> {
        if (user.id === updatedUser.id) {
          return updatedUser
        } else {return user}
      }
    )
    setUsers(updatedUser)
  }

  return (
    <div>
      <AdminBar>
        <UserTable users={users} onUpdateUser={onUpdateUser} />
      </AdminBar>
    </div>
  );
}
export default User;