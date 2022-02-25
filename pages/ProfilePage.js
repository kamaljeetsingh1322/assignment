import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MiniDrawer from "./MiniDrawer";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "./List";
import { useState } from "react";
import axios from "axios";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

function ProfilePage() {
  const [user, setUser] = useState({
    uname: "",
    uemail: "",
  });
  const [status, setStatus] = useState();

  function onTextFieldChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  }
  if (status) {
    return <ProfilePage />;
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3333/user`, user);
      setStatus(true);
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Box
            sx={{
              backgroundColor: "white",
              height: "30vh",
              width: "150vh",
              borderRadius: "10px",
              border: "1px solid black",
              textDecoration: "none",
            }}
          >
            <h5 style={{ marginLeft: "20px", padding: "15px" }}>Turing</h5>
            <form noValidate>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                  marginLeft: "30px",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  autoComplete="uname"
                  id="uname"
                  label="Name"
                  name="uname"
                  variant="outlined"
                  onChange={(e) => onTextFieldChange(e)}
                />
                <TextField
                  autoComplete="uemail"
                  id="uemail"
                  label="Email"
                  name="uemail"
                  variant="outlined"
                  onChange={(e) => onTextFieldChange(e)}
                />

                <br />
                <Button
                  type="submit"
                  variant="contained"
                  style={{ marginLeft: "10px" }}
                  onClick={(e) => onFormSubmit(e)}
                >
                  Add User
                </Button>
              </Box>
            </form>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              height: "100%",
              width: "150vh",
              borderRadius: "10px",
              border: "1px solid black",
              textDecoration: "none",
              marginTop: "30px",
            }}
          >
            <h4 style={{ marginLeft: "20px", marginTop: "20px" }}>User List</h4>
            <List />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ProfilePage;
