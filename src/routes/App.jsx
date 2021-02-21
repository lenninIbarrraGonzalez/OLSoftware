import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Users from "../containers/Users";
import EditUsers from "../components/EditUsers";
import NotFound from "../containers/NotFound";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useinitiaState";
import Layout from "../components/Layout";
import Login from "../containers/Login";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:id" component={EditUsers} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
