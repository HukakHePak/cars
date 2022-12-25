import React from "react";
import RootStoreContext from "../contexts/RootStoreContext";

export const StoreProvider = ({ store, children }) => 
<RootStoreContext.Provider value={store}>{children}</RootStoreContext.Provider>;
;