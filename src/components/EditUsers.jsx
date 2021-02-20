import React from "react";
import { TextField } from "@material-ui/core";

const EditUsers = () => (
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

export default EditUsers;
