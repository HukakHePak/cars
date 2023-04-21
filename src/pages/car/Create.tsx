import SelectAdd from "components/Input/SelectAdd";
import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import React from "react";
// import styles from "./style";

function Create() {
  const { brands } = useStore();

  return (
    <div>
      <SelectAdd data={brands.list} label="Брэнд" />
    </div>
  );
}

export default observer(Create);
