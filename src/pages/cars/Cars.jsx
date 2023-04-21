import { can } from "components/Can/Can";
import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import React from "react";
import { FlexboxGrid } from "rsuite";
import { UserType } from "stores/models/user";
import CarD from "./CarD";
import Create from "./Create";
import style from "./style";

const { manager, admin } = UserType;

function Cars() {
  const { cars } = useStore();

  return (
    <FlexboxGrid
      justify={cars.list.length < 2 ? "start" : "center"}
      className={style.cars}
    >
      {can(<Create />, [manager, admin])}
      {cars.list?.map((car) => (
        <CarD key={car.id} car={car} />
      ))}
    </FlexboxGrid>
  );
}

export default observer(Cars);
