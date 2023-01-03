import React from "react";
import RootStoreModel from "stores/root";

export const RootStoreContext = React.createContext();

export const RootStore = new RootStoreModel();

export function StoreProvider({ store, children }) {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
}
