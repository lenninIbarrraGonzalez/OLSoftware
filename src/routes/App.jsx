import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useinitiaState";
import Layout from "../components/Layout";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </AppContext.Provider>
  );
};

export default App;
