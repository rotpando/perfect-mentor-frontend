import React from "react";
import Input from "../components/Input";
import "../styles/Users/Users.css";
import { SearchOutlined } from "@mui/icons-material";
import Button from "../components/Button";
import UserInformation from "../components/UserInformation";

function Users() {
  return (
    <div className="usersRootContainer">
      <h1 className="userListTitle">Users</h1>
      <div className="userListContainer">
        <div className="filtersContainer">
          <Input
            style={{ width: "60%" }}
            icon={<SearchOutlined fontSize="large" />}
            placeholder="Search for users..."
          />
          <div className="filterButtonsContainer">
            <Button
              className="filterButton"
              title="Clear filters"
              fontSize={"15px"}
              color={"#44444480"}
            />
            <Button
              className="filterButton"
              title="Age"
              fontSize={"15px"}
              color={"#44444480"}
            />
            <Button
              className="filterButton"
              title="Status"
              fontSize={"15px"}
              color={"#44444480"}
            />
          </div>
        </div>
        <div className="userList">
          <div className="userListHeader">
            <p className="userListHeaderTitle">Name</p>
            <p className="userListHeaderTitle">Age</p>
            <p className="userListHeaderTitle">Email</p>
            <p className="userListHeaderTitle">Role</p>
            <p className="userListHeaderTitle">Joined Date</p>
            <p className="userListHeaderTitle">Status</p>
          </div>
          <UserInformation/>
          <UserInformation/>
        </div>
      </div>
    </div>
  );
}

export default Users;
