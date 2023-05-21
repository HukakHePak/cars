import { can } from "components/Can/Can"
import useStore from "hooks/useStore"
import { observer } from "mobx-react-lite"
import React, { useEffect, useState } from "react"
import { Button, ButtonToolbar, FlexboxGrid, Form, Input, InputGroup, InputNumber, SelectPicker } from "rsuite"
import SearchIcon from '@rsuite/icons/Search';
import { UserType } from "stores/models/user"
import CarD from "./CarD"
import Create from "./Create"
import style from "./style"
import FormGroup from "rsuite/esm/FormGroup"
import SelectAdd from "components/Input/SelectAdd"

const { manager, admin } = UserType



const Search = React.forwardRef((props, ref) => (
  <InputGroup className={style.searchInput}>
    <Input value={props.value} placeholder="Lada largus люкс автоматическая" {...props} ref={ref} />
    <InputGroup.Addon>
      <SearchIcon />
    </InputGroup.Addon>
  </InputGroup>
));
const BottomPrice = React.forwardRef((props, ref) => (
  <InputNumber value={props.value} placeholder="от" min={0} className={style.priceInput} step={100000} postfix="₽" ref={ref} {...props} />
));
const TopPrice = React.forwardRef((props, ref) => (
  <InputNumber value={props.value} placeholder="до" min={0} className={style.priceInput} step={100000} postfix="₽" ref={ref} {...props} />
));


const locale = {
  noResultsText: "Ничего не найдено",
  placeholder: "Выбрать",
  searchPlaceholder: "Искать"
}

const Brand = React.forwardRef((props, ref) => (
  <SelectPicker value={props.value} labelKey="name" valueKey="id" label="Брэнд" locale={locale} ref={ref} {...props} />
));

const Model = React.forwardRef((props, ref) => (
  <SelectPicker value={props.value} labelKey="name" valueKey="id" label="Модель" locale={locale} ref={ref} {...props} />
));

function Cars() {
  const { cars, auth, brands, models } = useStore()

  useEffect(() => {
    if (auth.isLogged) {
      cars.load()
    } else {
      cars.loadPublic()
    }
  }, [auth.isLogged, cars])

  const handeFormValueChange = (filter) => {
    cars.setFilter(filter)
  }

  return (
    <>
      <div className={style.carsFilter}>
        <Form onChange={handeFormValueChange} layout="inline">
          <Form.Group>
            <Form.Control value={cars.filter.search} accepter={Search} name="search" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Цена</Form.ControlLabel>
            <Form.Control value={cars.filter.bottomPrice} accepter={BottomPrice} name="bottomPrice" />
            <Form.Control value={cars.filter.topPrice} accepter={TopPrice} name="topPrice" />
          </Form.Group>
          <FormGroup>
            <Form.Control value={cars.filter.brandId} data={brands.list ?? []} accepter={Brand} name="brand" />
            <Form.Control value={cars.filter.modelId} data={models.list ?? []} accepter={Model} name="model" />
          </FormGroup>
          <FormGroup>
            <ButtonToolbar>
              <Button appearance="default" type="reset" onClick={() => location.reload()}>
                Очистить
              </Button>
            </ButtonToolbar>
          </FormGroup>
        </Form>
      </div >

      <FlexboxGrid justify={cars.sortedAndFilteredList.length < 2 ? "start" : "center"} className={style.cars}>
        {can(<Create />, [manager, admin])}
        {cars.sortedAndFilteredList.map((car) => (
          <CarD key={car.id} car={car} />
        ))}
      </FlexboxGrid>
    </>
  )
}

export default observer(Cars)
