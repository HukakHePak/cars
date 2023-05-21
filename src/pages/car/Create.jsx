import SelectAdd from "components/Input/SelectAdd"
import SelectColor from "components/Input/SelectColor"
import useStore from "hooks/useStore"
import { observer } from "mobx-react-lite"
import React, { useEffect, useState } from "react"
import { Button, DatePicker, FlexboxGrid, Input, Uploader } from "rsuite"
import CameraRetroIcon from '@rsuite/icons/legacy/CameraRetro';
import CarStore from "stores/cars"
import moment from "moment"
import style from "./style"
import { toJS } from "mobx"

function Create() {
  const { brands, models, complectations, engines, kpps, drives } = useStore()
  const [image, setImage] = useState([])

  useEffect(() => {
    brands.load()
    engines.load()
    kpps.load()
    drives.load()
  }, [])

  const [form, setForm] = useState({})

  const handleSelect = (name) => (value) => setForm({ ...form, [name]: value })

  const handleSubmit = (e) => {
    e.preventDefault()
    CarStore.create(form)
  }

  const handleImageUpload = (v) => {
    setImage(v)
    const reader = new FileReader()
    reader.onloadend = () => {
      console.log(reader.result)
    }
    reader.readAsDataURL(v[0].blobFile)
  }

  return (
    <FlexboxGrid className={style.wrap}>
      <form className={style.form} onSubmit={handleSubmit}>
        <SelectAdd data={brands.list} label="Брэнд" onSelect={(id) => models.load(id)} />
        <SelectAdd data={models.list} label="Модель" onSelect={(id) => complectations.load(id)} />
        <SelectAdd data={complectations.asOptions} label="Комплектация" onSelect={handleSelect("idcomplectation")} />
        <SelectAdd data={engines.asOptions} label="Двигатель" onSelect={handleSelect("idengine")} />
        <SelectAdd data={kpps.list} label="Тип КПП" onSelect={handleSelect("idkpp")} />
        <SelectAdd data={drives.list} label="Тип привода" onSelect={handleSelect("iddrive")} />
        <Input value={form.vin} placeholder="VIN: Ввести" onChange={handleSelect("vin")} />
        <Input value={form.price} placeholder="Стоимость: Ввести" onChange={handleSelect("price")} />
        <SelectColor defaultColor="#ad0303" onSelect={(v) => handleSelect("color")(v?.slice(1))} />
        <DatePicker onSelect={(v) => handleSelect("prod_date")(moment(v).format("YYYY-MM-DD"))} />
        <Uploader listType="picture" disabled={image.length > 0} fileList={image} value={toJS(image)} onChange={handleImageUpload} action="" autoUpload={false}>
          <button disabled={image.length > 0} type="button">
            <CameraRetroIcon />
          </button>
        </Uploader>
        <Button type="submit" appearance="primary">
          Создать
        </Button>
      </form>
    </FlexboxGrid>
  )
}

export default observer(Create)
