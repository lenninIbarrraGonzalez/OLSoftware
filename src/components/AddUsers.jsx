import React from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PeopleIcon from "@material-ui/icons/People";

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
  button: {
    display: "flex",
    justifyContent: "center",
  },
}));

const AddUsers = () => {
  const classes = useStyles();
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
        >
          Crear
        </Button>
      </div>
    </div>
  );
};

export default AddUsers;
