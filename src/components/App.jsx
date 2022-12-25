import React from "react";
import { withStore } from "contexts/RootStoreContext";
import style from "./style.scss";

function App({ store }) {
  console.log(store);

  return (
    <div className={style.app}>
      <h1>My React App!</h1>
      <button type="button" onClick={() => store.setName("Vitaliy")}>
        magic button
      </button>
      <div>{store.user.name}</div>
    </div>
  );
}

export default withStore(App);
