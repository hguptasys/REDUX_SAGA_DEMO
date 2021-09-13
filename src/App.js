import React from "react";

import Page_1 from "./Components/Page_1";
import { MemoryRouter, BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Page_1} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;