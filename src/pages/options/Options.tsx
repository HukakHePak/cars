import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import React from "react";
import { FlexboxGrid } from "rsuite";
import { UserType } from "stores/models/user";
import { can } from "components/Can/Can";
import OptionCard from "./OptionCard";
import style from "./style";
import CreateOptionButton from "./CreateOptionButton";

function Options() {
  const { options } = useStore();
  return (
    <FlexboxGrid justify="center" className={style.cars}>
      {can(<CreateOptionButton />, [UserType.stuff])}
      {options.list?.map((option) => (
        <OptionCard key={option.id} option={option} />
      ))}
    </FlexboxGrid>
  );
}

export default observer(Options);
