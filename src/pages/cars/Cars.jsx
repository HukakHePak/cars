import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import React from "react";
import { FlexboxGrid } from "rsuite";
import CarD from "./CarD";
import style from "./style";

function Cars() {
  const { cars } = useStore();
  return (
    <FlexboxGrid
      justify={cars.list.length < 2 ? "flex-start" : "center"}
      className={style.cars}
    >
      {cars.list.map((car) => (
        <CarD key={car.id} car={car} />
      ))}
    </FlexboxGrid>
  );
}

export default observer(Cars);
