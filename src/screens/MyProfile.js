import React from "react";
import "../styles/MyProfile/MyProfile.css";
import { Avatar, TextField } from "@mui/material";

function MyProfile() {
  return (
    <div className="userDataContainer">
      <Avatar
        src="https://billboard.com.ar/wp-content/uploads/2018/06/3f32280501d115470284a02c34ed49ac.jpg"
        style={{ width: "15vh", height: "15vh" }}
        className="avatar"
      />
      <div className="inputsContainer">
        <TextField
          label="Your Name"
          defaultValue="Chano"
          className="textInput"
          id="standard-basic"
          variant="standard"
          sx={{
            input: {
              fontWeight: 600,
            },
          }}
        />
        <TextField
          label="Your email"
          className="textInput"
          id="standard-basic"
          defaultValue="chano@gmail.com"
          variant="standard"
          sx={{
            input: {
              fontWeight: 600,
            },
          }}
        />
        <TextField
          label="Your password"
          defaultValue="chano12345"
          className="textInput"
          id="standard-basic"
          type={"password"}
          variant="standard"
          sx={{
            input: {
              fontWeight: 600,
            },
          }}
        />
        <TextField
          label="Your age"
          defaultValue={35}
          className="textInput"
          id="standard-basic"
          type={"number"}
          variant="standard"
          sx={{
            input: {
              fontWeight: 600,
            },
          }}
        />
        <TextField
          label="Role"
          defaultValue="Mentor"
          className="textInput"
          id="standard-basic"
          variant="standard"
          sx={{
            input: {
              fontWeight: 600,
            },
          }}
        />
      </div>
    </div>
  );
}

export default MyProfile;
