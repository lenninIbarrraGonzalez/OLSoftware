import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import PeopleIcon from "@material-ui/icons/People";

// import IconButton from "@material-ui/core/IconButton";
// import CloseIcon from "@material-ui/icons/Close";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    // marginBottom: theme.spacing(5),
    padding: theme.spacing(3),
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

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const AddUsers = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <PeopleIcon color="primary" />
        <Typography color="primary" className={classes.title}>
          Usuarios existentes
        </Typography>
      </div>
      <div>
        <Button
          type="button"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleClickOpen}
        >
          Crear
        </Button>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Agregar nuevo usuario
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} className={classes.dialog}>
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
          </DialogContent>
          <DialogActions>
            <div className={classes.buttons}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Aceptar
              </Button>
              <Button variant="outlined" color="primary" onClick={handleClose}>
                Cancelar
              </Button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default AddUsers;
