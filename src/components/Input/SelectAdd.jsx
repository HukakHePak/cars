import AddButton from "components/Button/AddButton"
import React from "react"
import { Popover, SelectPicker, Whisper } from "rsuite"
import style from "./style"
import { observer } from "mobx-react-lite"

/* eslint-disable react/jsx-props-no-spreading */

export const selectPickerLocale = {
  noResultsText: "Ничего не найдено",
  placeholder: "Выбрать",
  searchPlaceholder: "Искать"
}

function SelectAdd(props) {
  const { addForm, onAdd, disabled, Modal } = props
  const [isModalOpen, setModalOpen] = React.useState(false)

  const handleAddButtonClick = () => {
    setModalOpen(true)
    onAdd?.()
  }
  return (
    <div className={style.wrap}>
      <SelectPicker
        className={style.select}
        labelKey="name"
        valueKey="id"
        locale={selectPickerLocale}
        disabled={disabled}
        {...props}
      />
      <Whisper trigger="click" speaker={addForm ? <Popover arrow>{addForm}</Popover> : <div />}>
        <div className={style.button}>
          <AddButton onClick={handleAddButtonClick} disabled={disabled} />
        </div>
      </Whisper>
      {Modal && <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />}
    </div>
  )
}

export default observer(SelectAdd)
