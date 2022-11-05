import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";
import DataTable, { TableColumn } from "react-data-table-component";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface User {
  target(target: any): unknown;
  id: string;
  username: string;
  email: string;
  phone_number: string;
  password: string;
  personal_number: string;
  first_name: string;
  last_name: string;
  birth_date: string;
  nick_name: string;
  gender_id: string;
  culture_id: string;
  role_id: string;
  department_id: string;
  group_id: string;
  avatar: string;
}

function App() {
  const Button = styled.button`

  background: "white"};
  color: "white";
  border: 2px solid blue;
  border-radius: 3px;
  text-align:center;

  
`;

  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState<User>({} as any);
  const [updateUser, setUpdateUser] = useState<User>({} as any);
  const [open, setOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  console.log(users);

  const handleSubmit = () => {
    axios.post("http://localhost:4000/add_user", newUser).then((res) => {
      setUsers(res.data);
      setOpen(false);
    });
  };

  useEffect(() => {
    axios.get("http://localhost:4000/user_list").then((res) => {
      const { data } = res.data.Users;
      console.log(data);
      console.log(res.data.Users);
      setUsers(res.data.Users);
    });
  }, [updateUser]);

  const onDelete = (id: string) => {
    axios.delete(`http://localhost:4000/delete_user/${id}`).then((res) => {
      setUsers(res.data);
    });
  };

  const columns: TableColumn<User>[] = [
    {
      name: "Username",
      selector: (row) => row.username,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone number",
      selector: (row) => row.phone_number,
    },
    {
      name: "Password",
      selector: (row) => row.password,
    },
    {
      name: "Personal number ",
      selector: (row) => row.personal_number,
    },
    {
      name: "First name",
      selector: (row) => row.first_name,
    },
    {
      name: "Last name",
      selector: (row) => row.last_name,
    },
    {
      name: "Birth date",
      selector: (row) => row.birth_date,
    },
    {
      name: "Nickname",
      selector: (row) => row.nick_name,
    },
    {
      name: "Gender id",
      selector: (row) => row.gender_id,
    },
    {
      name: "Culture id",
      selector: (row) => row.culture_id,
    },
    {
      name: "Role id",
      selector: (row) => row.role_id,
    },
    {
      name: "Department id",
      selector: (row) => row.department_id,
    },
    {
      name: "Group id",
      selector: (row) => row.group_id,
    },
    {
      name: "Avatar",
      selector: (row) => row.avatar,
    },
    {
      name: "",
      cell: (user: User) => {
        return (
          <>
            <Button onClick={() => onDelete(user.id)}>del</Button>
            <Button onClick={() => openUpdate(user)}>edit</Button>
          </>
        );
      },
    },
  ];

  const openUpdate = (user: User) => {
    setUpdateUser(user);
    setUpdateModal(true);
  };

  const updateSubmit = () => {
    axios
      .put(`http://localhost:4000/update_user/${updateUser.id}`, updateUser)
      .then((res) => {
        setUpdateModal(false);
        console.log(res.data);
        setUpdateUser(res.data);
      });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateOpen = () => {
    setUpdateModal(true);
  };

  return (
    <ModalProvider>
      <div className="App">
        <div>
          {/* <button onClick={toggleModal}>Add user</button> */}
          <Button onClick={handleClickOpen}>Add user</Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create user</DialogTitle>
            <DialogContent>
              <DialogContentText>Add user</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="username"
                type="email"
                fullWidth
                variant="standard"
                value={newUser.username || ""}
                onChange={(event) => {
                  setNewUser((val) => ({
                    ...val,
                    username: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="email"
                type="email"
                fullWidth
                variant="standard"
                value={newUser.email || ""}
                onChange={(event) => {
                  setNewUser((val) => ({ ...val, email: event.target.value }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="phone number"
                type="email"
                fullWidth
                variant="standard"
                value={newUser.phone_number || ""}
                onChange={(event) => {
                  setNewUser((val) => ({
                    ...val,
                    phone_number: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="phone number"
                type="email"
                fullWidth
                variant="standard"
                value={newUser.password || ""}
                onChange={(event) => {
                  setNewUser((val) => ({
                    ...val,
                    password: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="phone number"
                type="email"
                fullWidth
                variant="standard"
                value={newUser.personal_number || ""}
                onChange={(event) => {
                  setNewUser((val) => ({
                    ...val,
                    personal_number: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="First name"
                type="email"
                fullWidth
                variant="standard"
                value={newUser.first_name || ""}
                onChange={(event) => {
                  setNewUser((val) => ({
                    ...val,
                    first_name: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Last name"
                type="email"
                fullWidth
                variant="standard"
                value={newUser.last_name || ""}
                onChange={(event) => {
                  setNewUser((val) => ({
                    ...val,
                    last_name: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Birth date"
                type="email"
                fullWidth
                variant="standard"
                value={newUser.birth_date || ""}
                onChange={(event) => {
                  setNewUser((val) => ({
                    ...val,
                    birth_date: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Nickname"
                type="email"
                fullWidth
                variant="standard"
                value={newUser.nick_name || ""}
                onChange={(event) => {
                  setNewUser((val) => ({
                    ...val,
                    nick_name: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="gender_id"
                type="email"
                fullWidth
                variant="standard"
                value={newUser.gender_id || ""}
                onChange={(event) => {
                  setNewUser((val) => ({
                    ...val,
                    gender_id: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="culture id"
                type="email"
                fullWidth
                variant="standard"
                value={newUser.culture_id || ""}
                onChange={(event) => {
                  setNewUser((val) => ({
                    ...val,
                    culture_id: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="role id"
                type="email"
                fullWidth
                variant="standard"
                value={newUser.role_id || ""}
                onChange={(event) => {
                  setNewUser((val) => ({
                    ...val,
                    role_id: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="department id"
                type="email"
                fullWidth
                variant="standard"
                value={newUser.department_id || ""}
                onChange={(event) => {
                  setNewUser((val) => ({
                    ...val,
                    department_id: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="group id"
                type="email"
                fullWidth
                variant="standard"
                value={newUser.group_id || ""}
                onChange={(event) => {
                  setNewUser((val) => ({
                    ...val,
                    group_id: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="avatar"
                type="email"
                fullWidth
                variant="standard"
                value={newUser.avatar || ""}
                onChange={(event) => {
                  setNewUser((val) => ({
                    ...val,
                    avatar: event.target.value,
                  }));
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSubmit}>Submit</Button>
            
            </DialogActions>
          </Dialog>

          <Dialog open={updateModal} onClose={handleClose}>
            <DialogTitle>Update user</DialogTitle>
            <DialogContent>
              <DialogContentText>update user</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="username"
                type="email"
                fullWidth
                variant="standard"
                value={updateUser.username || ""}
                onChange={(event) => {
                  setUpdateUser((val) => ({
                    ...val,
                    username: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="username"
                type="email"
                fullWidth
                variant="standard"
                value={updateUser.email || ""}
                onChange={(event) => {
                  setUpdateUser((val) => ({
                    ...val,
                    email: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="username"
                type="email"
                fullWidth
                variant="standard"
                value={updateUser.phone_number || ""}
                onChange={(event) => {
                  setUpdateUser((val) => ({
                    ...val,
                    phone_number: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="username"
                type="email"
                fullWidth
                variant="standard"
                value={updateUser.password || ""}
                onChange={(event) => {
                  setUpdateUser((val) => ({
                    ...val,
                    password: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="username"
                type="email"
                fullWidth
                variant="standard"
                value={updateUser.personal_number || ""}
                onChange={(event) => {
                  setUpdateUser((val) => ({
                    ...val,
                    personal_number: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="username"
                type="email"
                fullWidth
                variant="standard"
                value={updateUser.first_name || ""}
                onChange={(event) => {
                  setUpdateUser((val) => ({
                    ...val,
                    first_name: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="username"
                type="email"
                fullWidth
                variant="standard"
                value={updateUser.last_name || ""}
                onChange={(event) => {
                  setUpdateUser((val) => ({
                    ...val,
                    last_name: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="username"
                type="email"
                fullWidth
                variant="standard"
                value={updateUser.birth_date || ""}
                onChange={(event) => {
                  setUpdateUser((val) => ({
                    ...val,
                    birth_date: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="username"
                type="email"
                fullWidth
                variant="standard"
                value={updateUser.nick_name || ""}
                onChange={(event) => {
                  setUpdateUser((val) => ({
                    ...val,
                    nick_name: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="username"
                type="email"
                fullWidth
                variant="standard"
                value={updateUser.gender_id || ""}
                onChange={(event) => {
                  setUpdateUser((val) => ({
                    ...val,
                    gender_id: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="username"
                type="email"
                fullWidth
                variant="standard"
                value={updateUser.culture_id || ""}
                onChange={(event) => {
                  setUpdateUser((val) => ({
                    ...val,
                    culture_id: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="username"
                type="email"
                fullWidth
                variant="standard"
                value={updateUser.role_id || ""}
                onChange={(event) => {
                  setUpdateUser((val) => ({
                    ...val,
                    role_id: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="username"
                type="email"
                fullWidth
                variant="standard"
                value={updateUser.department_id || ""}
                onChange={(event) => {
                  setUpdateUser((val) => ({
                    ...val,
                    department_id: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="username"
                type="email"
                fullWidth
                variant="standard"
                value={updateUser.group_id || ""}
                onChange={(event) => {
                  setUpdateUser((val) => ({
                    ...val,
                    group_id: event.target.value,
                  }));
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="username"
                type="email"
                fullWidth
                variant="standard"
                value={updateUser.avatar || ""}
                onChange={(event) => {
                  setUpdateUser((val) => ({
                    ...val,
                    avatar: event.target.value,
                  }));
                }}
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={updateSubmit}>Update</Button>
            </DialogActions>
          </Dialog>
        </div>
        <DataTable columns={columns} data={users} />
      </div>
    </ModalProvider>
  );
}

export default App;
