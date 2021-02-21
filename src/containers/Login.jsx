import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import CssBaseline from '@material-ui/core/CssBaseline';
import fondologin from "../assets/images/fondologin.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 400,
    padding: theme.spacing(5),
    marginRight: theme.spacing(15)
  },
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontSize: 25,
  },
  imagen: {
    width: "500px",
    height: "100vh",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: -1
  },
  img: {
    width: "100vw",
    height: "100vh"
  }
}));



const Login = () => {

  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/users");
  }

  return (
    <>
      <CssBaseline />
      <section>
        <div className={classes.container}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
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
              <Button fullWidth color="primary" variant="contained" onClick={handleSubmit}>Ingresar</Button>

            </CardContent>

          </Card>

        </div>
      </section>

      <div className={classes.imagen}>
        <img src={fondologin} alt="logo" className={classes.img} />
      </div>
    </>
  )
}

export default Login
