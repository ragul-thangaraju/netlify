import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./Signup"
import Dashboard from "./Dashboard"

function App() {
  return (
    <React.Fragment>
      <React.StrictMode>
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route path="/signup" component={Signup} />
              <Route path="/" component={Dashboard} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </React.StrictMode>
    </React.Fragment>);
}

export default App;
