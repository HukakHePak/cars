import React from "react"
import { createRoot } from "react-dom/client"
import { StoreProvider, RootStore } from "contexts/RootStoreContext"
import { RouterProvider } from "react-router-dom"
import "rsuite/dist/rsuite.min.css"
import "react-color-palette/lib/css/styles.css"
import "scss/style"
import Router from "./Router"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <StoreProvider store={RootStore}>
    <RouterProvider router={Router} />
  </StoreProvider>
)
