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
      <div className={style.header}>
        {car.brand} {car.model} {car.engine} {car.kpp}
      </div>
      <FlexboxGrid justify="space-between">
        <img className={style.img} src={car.photo} alt="" />
        <ul className={style.options}>
          <li> {car.complectation} </li>
          <li> {car.price} </li>
        </ul>
      </FlexboxGrid>
    </FlexboxGrid.Item>
  );
}

export default observer(CarD);
