import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApiProvider api={apiSlice}>
    <App />
  </ApiProvider>
);
