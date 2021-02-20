import React, { useEffect, useContext } from "react";
import { TextField } from "@material-ui/core";
import AppContext from "../context/AppContext";

const EditUsers = (props) => {
  const { id } = props.match.params;
  console.log("este es el id", id)



  const { searchUser } = useContext(AppContext);

  useEffect(() => {
    searchUser(id.toString())
  }, []);

  return (
    <div>
      <TextField
        id="firstName"
        name="firstName"
        label="Nombres"
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <TextField
        id="lastName"
        name="lastName"
        label="Apellidos"
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
    </div>
  );
}


export default EditUsers;
