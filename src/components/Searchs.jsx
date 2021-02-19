import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, TextField, Button } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: 25,
  },
  title: {
    fontSize: 20,
    paddingLeft: 5,
  },
  head: {
    display: "flex",
    justifyContent: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    marginTop: 15,
  },
  button: {
    marginRight: 20,
  },
});

const Searchs = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <div className={classes.head}>
          <PersonAddIcon color="primary" />
          <Typography color="primary" className={classes.title}>
            Filtrar búsqueda
          </Typography>
        </div>
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

        <TextField
          id="password"
          name="password"
          label="Contraseña"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
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
        <div className={classes.buttons}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Filtrar
          </Button>
          <Button variant="outlined" color="primary">
            Limpiar
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Searchs;
