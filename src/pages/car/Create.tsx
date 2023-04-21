import WithAdd from "components/WithAdd/WithAdd";
import useStore from "hooks/useStore";
import React from "react";
import { SelectPicker } from "rsuite";
// import styles from "./style";

function Create() {
  const { brands } = useStore();

  return (
    <WithAdd>
      <SelectPicker data={brands.list} />
    </WithAdd>
  );
}

export default Create;
