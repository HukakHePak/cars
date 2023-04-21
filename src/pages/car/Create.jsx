import SelectAdd from "components/Input/SelectAdd";
import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import React from "react";
import { FlexboxGrid } from "rsuite";
import style from "./style";

function Create() {
  const { brands, models, complectations } = useStore();

  return (
    <FlexboxGrid className={style.wrap}>
      <SelectAdd
        data={brands.list}
        label="Брэнд"
        onSelect={(id) => models.load(id)}
      />
      <SelectAdd
        data={models.list}
        label="Модель"
        onSelect={(id) => complectations.load(id)}
      />
      <SelectAdd data={complectations.asOptions()} label="Комплектация" />
    </FlexboxGrid>
  );
}

export default observer(Create);
