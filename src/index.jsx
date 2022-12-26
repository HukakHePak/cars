import React from "react";
import { createRoot } from "react-dom/client";
// import "semantic-ui-css/semantic.min.css";
import "rsuite/dist/rsuite.min.css";
import { StoreProvider, RootStore } from "contexts/RootStoreContext";
import { RouterProvider } from "react-router-dom";
import "scss/root.scss";
import Router from "./Router";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StoreProvider store={RootStore}>
    <RouterProvider router={Router} />
  </StoreProvider>
);
