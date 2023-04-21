import AddButton from "components/Button/AddButton";
import React from "react";
import { SelectPicker } from "rsuite";
// import styles from "./style";

function SelectAdd(props) {
  return (
    <div>
      <SelectPicker labelKey="name" valueKey="id" {...props} />
      <AddButton />
    </div>
  );
}

export default SelectAdd;
