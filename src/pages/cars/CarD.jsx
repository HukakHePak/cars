import React from "react";
import { Button } from "rsuite";

function CarD({ car }) {
  return <div className={style.card}>
    <h3> {car.brand} {car.model} {car.engine} {car.kpp}  </h3>
    <div className={style.info}>
      <img className={style.img} src={car.photo} alt=""/>
      <ul>
        <li> {car.complectation} </li>
        <li> {car.price} </li>
        <li> <Button> Больше </Button> </li>
      </ul>
    </div>

  </div>;
}

export default CarD;
