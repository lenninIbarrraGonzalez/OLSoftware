import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  footer: {
    height: 50,
    paddingTop: theme.spacing(2),
    // backgroundColor: "white",
  },
  container: {
    width: "100vw",
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container className={classes.container}>
          <Typography variant="body1">OLSoftware</Typography>
        </Container>
      </footer>
    </div>
  );
}
