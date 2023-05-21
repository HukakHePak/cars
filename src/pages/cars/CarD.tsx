import useStore from "hooks/useStore"
import { observer } from "mobx-react-lite"
import React from "react"
import { useNavigate } from "react-router-dom"
import { FlexboxGrid } from "rsuite"
import { Car } from "stores/models/car"
import path from "utils/path"
import { publicUrl } from "utils/api"
import style from "./style"

function CarD(props: { car: Car }) {
  const { car } = props
  const { cars } = useStore()

  const nav = useNavigate()

  const selectCar = () => {
    cars.select(car)
    car.load()

    nav(`${path.cars}/${car.id}`)
  }

  const { complectation, engine, kpp, price, drive } = car || {}
  const { model } = complectation || {}

  return (
    <FlexboxGrid className={style.card} onClick={selectCar}>
      <img className={style.img} src={model?.photo} alt="" />
      <FlexboxGrid className={style.options}>
        <div className={style.header}>
          {model?.brand?.name} {model?.name} {((engine?.volume || 0) / 1000).toFixed(1)}
        </div>
        <ul>
          {[
            ["Комплектация", complectation?.name?.name],
            ["КПП", kpp?.name],
            ["Привод", drive?.name],
            ["Мощность двигателя", `${engine?.perfomance} л.с.`]
          ].map(([name, value]) => (
            <li key={name}>
              - <span className={style.badge}>{value}</span>
            </li>
          ))}
        </ul>
        <div>от {price} р.</div>
      </FlexboxGrid>
    </FlexboxGrid>
  )
}

export default observer(CarD)
