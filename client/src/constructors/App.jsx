import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "../Context/constructors/store";
import { router } from "../utils/routing/router";

const App = () => {
  const routeComponents = router.map(({ id, path, component }) => (
    <Route path={path} element={component} key={id} />
  ));

  return (
    <Provider>
      <Routes>{routeComponents}</Routes>
    </Provider>
  );
};

export default App;
