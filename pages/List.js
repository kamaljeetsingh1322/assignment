import {
  Box,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useState, useEffect } from "react";

const List = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getAllUser() {
      try {
        const users = await axios.get("http://localhost:3333/user");
        console.log(users.data);
        setUser(users.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getAllUser();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3333/user/${id}`);
    var newuser = user.filter((item) => {
      return item.id !== id;
    });
    setUser(newuser);
  };

  const CustomLink = (props) => {
    return <a href={props.href}>{props.children}</a>;
  };

  return (
    <>
      <Box textAlign="center" p={2}></Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center">No</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((users, i) => {
              return (
                <TableRow key={i}>
                  <TableCell align="center">{i + 1}</TableCell>
                  <TableCell align="center">{users.uname}</TableCell>
                  <TableCell align="center">{users.uemail}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="View">
                      <IconButton>
                        <CustomLink to={`/view/${users.id}`}>
                          <VisibilityIcon color="primary" />
                        </CustomLink>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit">
                      <IconButton>
                        <CustomLink to={`/edit/${users.id}`}>
                          <EditIcon />
                        </CustomLink>
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDelete(users.id)}>
                        <DeleteIcon color="secondary" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default List;
