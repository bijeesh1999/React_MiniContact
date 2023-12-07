import React from "react";
import ReactDOM from "react-dom/client";
import store from "./contactRedux/store/store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

/* Here is Redux is wrap the app component and provide the store for he parent APP component */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);
