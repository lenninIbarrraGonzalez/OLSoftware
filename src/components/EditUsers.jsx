import React, { useRef, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, Card, Typography, Button } from "@material-ui/core";
import AppContext from "../context/AppContext";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5),
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontSize: 20,
    padding: theme.spacing(5),
  },
  head: {
    display: "flex",
    justifyContent: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: 15,
    paddingBottom: theme.spacing(3),
  },
  button: {
    marginRight: 20,
  },
  dialog: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
}));

const EditUsers = (props) => {
  const classes = useStyles();
  const { id } = props.match.params;
  console.log("este es el id", id);

  const {
    state: { users },
  } = useContext(AppContext);

  const user = users.filter((user) => user.id === id);

  console.log("USER FILTER", user);

  const form = useRef(null);

  const handleSubmit = () => {
    // const formData = new FormData(form.current);
    // const id = (users.length + 1).toString();
    // const user = {
    //   id,
    //   firstName: formData.get("firstName"),
    //   lastName: formData.get("lastName"),
    //   identification: formData.get("identification"),
    //   role: formData.get("role"),
    //   state: formData.get("state"),
    //   password: formData.get("password"),
    //   phone: formData.get("phone"),
    //   email: formData.get("email"),
    // };
    // addUser(user);
  };

  return (
    <Card className={classes.root}>
      <Typography color="primary" className={classes.title}>
        Modificar información de usuario
      </Typography>
      <form ref={form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
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
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
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
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              id="identification"
              name="identification"
              label="Identificación (C.C)"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              id="role"
              name="role"
              label="Rol asociado"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              id="state"
              name="state"
              label="Estado"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              id="password"
              name="password"
              label="Contraseña"
              style={{ margin: 8 }}
              fullWidth
              type="password"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              id="phone"
              name="phone"
              label="Teléfono"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField
              id="email"
              name="email"
              label="Correo electrónico"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </form>
      <div className={classes.buttons}>
        <Button
          type="button"
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Aceptar
        </Button>
        <Button variant="outlined" color="primary">
          Cancelar
        </Button>
      </div>
    </Card>
  );
};

export default EditUsers;
