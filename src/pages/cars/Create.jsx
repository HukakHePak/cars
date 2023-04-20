import useUI from "hooks/useUI";
import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FlexboxGrid } from "rsuite";
import path from "utils/path";
import style from "./style";

function CarD({ car }) {
  const { card } = useUI();

  const nav = useNavigate();

  const selectCar = () => {
    card.setCar(car);
    nav(`${path.cars}/${car.id}`);
  };

  return (
    <FlexboxGrid.Item className={style.card} onClick={selectCar}>
      +
    </FlexboxGrid.Item>
  );
}

export default observer(CarD);
