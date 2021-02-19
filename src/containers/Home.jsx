import React from "react";
import { Grid } from "@material-ui/core";
import Users from "../components/Users";
import Searchs from "../components/Searchs";

const Home = () => (
  <div>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={10} lg={9}>
        <Users />
      </Grid>
      <Grid item xs={12} sm={12} md={2} lg={3}>
        <Searchs />
      </Grid>
    </Grid>
  </div>
);

export default Home;
