import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home.jsx";
import Login from "../containers/Login.jsx";
import Register from "../containers/Register.jsx";
import NotFound from "../containers/NotFound.jsx";

const App = () => (
  <BrowserRouter>
    {/* Switch es un componente que ance de react-router-dom, nos permite manejar rutas dinamicamente  */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route extac path="/register" component={Register} />
      <Route component={NotFound} />
      {/* Debe declararse NotFound aqui al final*/}
    </Switch>
  </BrowserRouter>
);

export default App;
