import useUI from "hooks/useUI";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "rsuite";
import style from "./style";

function CarD({ car }) {
  const { card } = useUI();

  const selectCar = () => card.setCar(car);

  return (
    <div className={style.card}>
      <h3>
        {" "}
        {car.brand} {car.model} {car.engine} {car.kpp}{" "}
      </h3>
      <div className={style.info}>
        <img className={style.img} src={car.photo} alt="" />
        <ul>
          <li> {car.complectation} </li>
          <li> {car.price} </li>
          <li>
            {" "}
            <Button onClick={selectCar}>
              <Link to={`cars/${car.id}`}> Больше </Link>
            </Button>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default observer(CarD);
