import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "upkit/dist/style.min.css";
import { Provider } from "react-redux";
import store from "./app/store";
import Home from "./pages/Home";
import Register from "./pages/Register";
import RegisterSuccess from "./pages/RegisterSuccess";
import Login from "./pages/Login";

import { listen } from "./app/listener";

function App() {
  React.useEffect(() => {
    listen();
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Router path="/register/berhasil">
            <RegisterSuccess />
          </Router>
          <Route path="/register" component={Register} />
          <Router path="/login">
            <Login />
          </Router>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
