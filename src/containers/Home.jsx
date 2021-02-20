import React from "react";
import { Grid, Card } from "@material-ui/core";
import AddUsers from "../components/AddUsers";
import Users2 from "../components/Users2";
import Searchs from "../components/Searchs";

const Home = () => (
  <div>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={10} lg={9}>
        <Card>
          <AddUsers />
          <Users2 />
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={2} lg={3}>
        <Searchs />
      </Grid>
    </Grid>
  </div>
);

export default Home;
