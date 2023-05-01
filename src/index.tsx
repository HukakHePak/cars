import React from "react";
import { createRoot } from "react-dom/client";
import { StoreProvider, RootStore } from "contexts/RootStoreContext";
import { RouterProvider } from "react-router-dom";
import "uikit/dist/css/uikit.min.css";
import "rsuite/dist/rsuite.min.css";
import "react-color-palette/lib/css/styles.css";
import "scss/root";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import Router from "./Router";

UIkit.use(Icons);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StoreProvider store={RootStore}>
    <RouterProvider router={Router} />
  </StoreProvider>
);
