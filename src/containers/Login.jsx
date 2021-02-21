import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import CircularProgress from "@material-ui/core/CircularProgress";
import fondologin from "../assets/images/fondologin.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    padding: theme.spacing(5),
    marginRight: theme.spacing(15),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontSize: 25,
  },
  imagen: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: -1,
  },
  img: {
    width: "100vw",
    height: "100vh",
  },
  spiner: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#00000080",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 5,
  },
  subtitle: {
    color: "white",
    fontSize: "30px",
  },
  loading: {
    display: "flex",
    flexDirection: "column",
  },
  cirular: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [mostrar, setMostrar] = useState(false);

  const handleSubmit = () => {
    setMostrar(true);
    setTimeout(() => {
      history.push("/users");
    }, 5000);
  };

  return (
    <>
      <CssBaseline />
      <section>
        <div className={classes.container}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Incio de sesión
              </Typography>

              <TextField
                id="email"
                name="email"
                label="Usuario"
                type="email"
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
                type="password"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <Button
                fullWidth
                color="primary"
                variant="contained"
                onClick={handleSubmit}
              >
                Ingresar
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className={classes.imagen}>
        <img src={fondologin} alt="logo" className={classes.img} />
      </div>
      {mostrar === true ? (
        <div className={classes.spiner}>
          <div className={classes.loading}>
            <Typography
              className={classes.subtitle}
              color="textSecondary"
              gutterBottom
            >
              Estamos preparando todo para Tí
            </Typography>
            <div className={classes.cirular}>
              <CircularProgress color="secondary" />
              <CircularProgress color="secondary" />
              <CircularProgress color="secondary" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Login;
