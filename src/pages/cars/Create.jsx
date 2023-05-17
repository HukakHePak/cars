import { Plus } from "@rsuite/icons/lib/icons"
import useStore from "hooks/useStore"
import { observer } from "mobx-react-lite"
import React from "react"
import { useNavigate } from "react-router-dom"
import { FlexboxGrid } from "rsuite"
import { Car } from "stores/models/car"
import path from "utils/path"
import style from "./style"

function Create() {
  const { cars } = useStore()

  const nav = useNavigate()

  const selectCar = () => {
    cars.select(new Car())
    nav(`${path.cars}/create`)
  }

  return (
    <FlexboxGrid.Item className={style.card} onClick={selectCar}>
      <Plus height="100%" width="100%" />
    </FlexboxGrid.Item>
  )
}

export default observer(Create)
