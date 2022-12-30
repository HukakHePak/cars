import { observer } from "mobx-react-lite";
import React, { createContext, useContext } from "react";
import RootStoreModel from "stores/root";

export const RootStoreContext = createContext();

export const RootStore = new RootStoreModel();

export const useStore = () => useContext(RootStoreContext);

export function StoreProvider({ store, children }) {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
}

/* eslint-disable react/jsx-props-no-spreading */

export const withStore = (Component) => {
  return function Stored(props) {
    const store = useStore();

    const Observed = observer(Component);

    return <Observed {...props} store={store} />;
  };
};
