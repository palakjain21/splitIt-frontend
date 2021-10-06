import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Register from "./components/register/Register";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/Signup" component={Register} />
          <Route path="/Login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
