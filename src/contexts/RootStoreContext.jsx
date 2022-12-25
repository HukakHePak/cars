import { observer } from "mobx-react-lite";
import React, { createContext, useContext } from "react";
import RootStoreModel from "../stores/root";

export const RootStoreContext = createContext();

const RootStore = new RootStoreModel();

export const useStore = () => useContext(RootStoreContext);

export const StoreProvider = observer(({ store = RootStore, children }) => (
  <RootStoreContext.Provider value={store}>
    {children}
  </RootStoreContext.Provider>
));

/* eslint-disable react/jsx-props-no-spreading */

export const withStore = (Component) => {
  return function Stored(props) {
    const store = useStore();

    const Observed = observer(Component);

    return <Observed {...props} store={store} />;
  };
};
