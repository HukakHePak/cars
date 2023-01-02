import React from "react";
import { withStore } from "contexts/RootStoreContext";
import { Link, Outlet } from "react-router-dom";
import { Button } from "rsuite";
import style from "./style";

function App({ store }) {
  return (
    <div className={style.app}>
      <h1>My React App!</h1>
      <button type="button" onClick={() => store.setName("Vitaliy")}>
        magic button
      </button>
      <button type="button" className={style.btn}>
        <Link to="/profile">Profile</Link>
      </button>
      <Button type="button" className={style.btn}>
        <Link to="/login">Login</Link>
      </Button>
      <div>{store.user.name}</div>
      <div>
        {" "}
        <Outlet />{" "}
      </div>
    </div>
  );
}

export default withStore(App);
