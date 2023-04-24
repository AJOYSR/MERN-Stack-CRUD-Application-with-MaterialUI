import React, { useEffect, useState } from "react";
import { getUsers,deleteUser } from "../service/api";
import { Link } from "react-router-dom";
import {
  TableHead,
  TableCell,
  TableRow,
  Table,
  TableBody,
  styled,
  Button,
} from "@mui/material";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
  border-collapse: separate;
  border-spacing: 0px 8px;

  th {
    font-weight: bold;
    background: #111111;
    color: #fff;
    text-align: center;
  }

  td {
    padding: 6px 12px;
    border: 1px solid gray;
    font-size: 16px;
  }
`;

export default function AllUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let res = await getUsers();
    setUsers(res.data);
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  }

  return (
    <StyledTable>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody >
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: 5 }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUserDetails(user._id)}
              >
                Del
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
}
