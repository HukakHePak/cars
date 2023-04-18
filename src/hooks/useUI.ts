import { RootStoreContext } from "contexts/RootStoreContext";
import { useContext } from "react";
import RootStoreModel from "stores/root";

export default () => {
  const context = useContext(RootStoreContext) as RootStoreModel;

  return context.ui;
};
