import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Cadastrar from "./pages/Cadastrar";
import Editar from "./pages/Editar";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/cadastrar" component={Cadastrar} />
      <Route path="/editar/:contatoEmail" component={Editar} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
