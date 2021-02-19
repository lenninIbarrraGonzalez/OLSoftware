import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useinitiaState";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
