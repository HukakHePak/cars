import { RootStoreContext } from "contexts/RootStoreContext";
import { useContext } from "react";
import RootStoreModel from "stores/root";

export default () => useContext(RootStoreContext) as RootStoreModel;
