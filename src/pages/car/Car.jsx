import React, { useEffect, useState } from "react"
import { Button, Container, FlexboxGrid, Input, Modal } from "rsuite"
import { useParams } from "react-router-dom"
import useStore from "hooks/useStore"
import { publicUrl } from "utils/api"
import style from "./style"
import { observer } from "mobx-react-lite"
import SelectAdd from "components/Input/SelectAdd"
import CheckIcon from "@rsuite/icons/Check"

function Car() {
  const { id } = useParams()
  const { cars, complectations } = useStore()
  const [modal, setModal] = useState()

  useEffect(() => {
    if (!cars.selected) {
      cars.loadPublic().then(() => {
        cars.select(cars.list.find((item) => item.id === +id))
      })
    }
  })

  // const [ form, setForm ] = useSate()
  // const handleSelect = (name) => (value) => setForm({ ...form, [name]: value })

  const { complectation, engine, kpp, price, drive } = cars.selected || {}
  const { model } = complectation || {}

  return (
    <Container className={style.container}>
      <Modal open={modal} onClose={() => setModal()}>
        <div className={style.modal}>
          {modal === "phone" && (
            <>
              <p>Пожалуйста, укажите ваш номер телефона или почту</p>
              <Input placeholder="Email, телефон..." />
              <Button appearance="primary" onClick={() => setModal("confirm")}>
                Отправить
              </Button>
            </>
          )}
          {modal === "confirm" && (
            <>
              <CheckIcon className={style.icon}/>
              Ваш автомобиль забронирован. Мы перезвоним в ближайшее время, чтобы обсудить детали заказа!{" "}
              <Button appearance="primary" onClick={() => setModal()}>
                Хорошо
              </Button>
            </>
          )}
        </div>
      </Modal>
      <FlexboxGrid className={style.infoBlock}>
        <img className={style.img} src={`${publicUrl}/${model?.photo}`} alt="" />
        <FlexboxGrid className={style.info}>
          <div className={style.header}>
            {model?.brand?.name} {model?.name} {((engine?.volume || 0) / 1000).toFixed(1)}
          </div>
          {/* <SelectAdd
            data={complectations.asOptions}
            label="Комплектация"
            // onSelect={handleSelect("idcomplectation")}
          /> */}
          <ul className={style.options}>
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
          <Button appearance="secondary" className={style.bindBtn} onClick={() => setModal("phone")}>
            Забронировать
          </Button>
        </FlexboxGrid>
      </FlexboxGrid>
    </Container>
  )
}

export default observer(Car)
