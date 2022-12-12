import React from "react";
import { Provider } from "../Context/constructors/store";

const App = () => {
  return (
    <Provider>
      <div>Hello Team</div>
    </Provider>
  );
};

export default App;
