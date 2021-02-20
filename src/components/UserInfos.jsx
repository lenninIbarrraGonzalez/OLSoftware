import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    paddingRight: theme.spacing(3),
  },
  icon: {
    paddingLeft: theme.spacing(1.5),
  },
}));

const UserInfos = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AccountCircleIcon />
      <Typography color="white" className={classes.icon}>
        Andres Felipe Garcia
      </Typography>
    </div>
  );
};

export default UserInfos;
