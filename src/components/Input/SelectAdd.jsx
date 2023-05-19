import AddButton from "components/Button/AddButton"
import React from "react"
import { Popover, SelectPicker, Whisper } from "rsuite"
import style from "./style"

/* eslint-disable react/jsx-props-no-spreading */

function SelectAdd(props) {
  const { addForm, onAdd } = props
  return (
    <div className={style.wrap}>
      <SelectPicker
        className={style.select}
        labelKey="name"
        valueKey="id"
        locale={{
          noResultsText: "Ничего не найдено",
          placeholder: "Выбрать",
          searchPlaceholder: "Искать"
        }}
        {...props}
      />
      <Whisper trigger="click" speaker={addForm ? <Popover arrow>{addForm}</Popover> : <div />}>
        <div className={style.button}>
          <AddButton onClick={onAdd} />
        </div>
      </Whisper>
    </div>
  )
}

export default SelectAdd
