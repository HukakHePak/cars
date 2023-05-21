import useStore from "hooks/useStore"
import { observer } from "mobx-react-lite"
import React from "react"
import { useNavigate } from "react-router-dom"
import { FlexboxGrid } from "rsuite"
import path from "utils/path"
import style from "./style"

function Edit({ car }) {
  const { cars } = useStore()

  const nav = useNavigate()

  const selectCar = () => {
    cars.select(car)
    car.load()

    nav(`${path.cars}/${car.id}`)
  }

  return (
    <FlexboxGrid.Item className={style.card} onClick={selectCar}>
      <div className={style.header}>
        {car?.complectation?.model?.brand?.name} {car?.complectation?.model?.name}
      </div>
      <FlexboxGrid justify="space-between">
        <img className={style.img} src={car.complectation?.model?.photo} alt="" />

        <ul className={style.options}>
          <li> {car?.complectation?.name?.name} </li>
          <li>{car?.engine?.perfomance}</li>
          <li>{car?.kpp?.name}</li>
          <li> {car?.price} </li>
        </ul>
      </FlexboxGrid>
    </FlexboxGrid.Item>
  )
}

export default observer(Edit)
