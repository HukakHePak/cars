import React from "react";
import { createRoot } from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import "rsuite/dist/rsuite.min.css";
import { StoreProvider, RootStore } from "contexts/RootStoreContext";
import { RouterProvider } from "react-router-dom";
import "scss/root.scss";
// UIKit import
import "uikit/dist/css/uikit.min.css";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import Router from "./Router";

// loads the Icon plugin
UIkit.use(Icons);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StoreProvider store={RootStore}>
    <RouterProvider router={Router} />
  </StoreProvider>
);
