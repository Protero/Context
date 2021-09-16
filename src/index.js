import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Provider from "./state/Provider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./components/Users";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider>
      <Router>
        <Switch>
          <Route path="/users/:id">
            <Users />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </StrictMode>,
  rootElement
);
