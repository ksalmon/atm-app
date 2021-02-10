import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import configureStore from "./store";
import reportWebVitals from "./reportWebVitals";

const configuredStore = configureStore();
const { store } = window.store || configuredStore;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={configuredStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
