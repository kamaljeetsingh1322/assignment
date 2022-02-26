import { Typography, Box, Grid, TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState({
    uname: "",
    uemail: "",
  });
  useEffect(() => {
    async function getUser() {
      try {
        const user = await axios.get(`http://localhost:3333/user/${id}`);
        // console.log(student.data);
        setUser(user.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getUser();
  }, []);

  function onTextFieldChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3333/user/${id}`, user);
      history.push("/");
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  function handleClick() {
    history.push("/");
  }
  return (
    <>
      <Box textAlign="center" p={2} mb={2}>
        <Typography variant="h5">React CRUD with API Call</Typography>
      </Box>

      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} mb={2}>
            <Typography variant="h6">Edit User</Typography>
          </Box>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="uname"
                  name="uname"
                  variant="outlined"
                  required
                  fullWidth
                  id="uname"
                  label="Name"
                  value={user.uname}
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="uemail"
                  name="uemail"
                  variant="outlined"
                  required
                  fullWidth
                  id="uemail"
                  label="Email Address"
                  value={user.uemail}
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                {" "}
                Update{" "}
              </Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
            <Button variant="contained" color="primary" onClick={handleClick}>
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Edit;
