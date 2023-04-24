import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import React from "react";
import { FlexboxGrid } from "rsuite";
import OptionCard from "./OptionCard";

function Options() {
  const { options } = useStore();
  return (
    <FlexboxGrid justify="center">
      {/* {can(<Create />, [roles.manager, roles.admin])} */}
      {options.list?.map((option) => (
        <OptionCard key={option.id} option={option} />
      ))}
    </FlexboxGrid>
  );
}

export default observer(Options);
