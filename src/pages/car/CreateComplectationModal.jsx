import SelectAdd, { selectPickerLocale } from "components/Input/SelectAdd";
import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite"
import React from "react"
import { Button, Form, Modal, SelectPicker } from "rsuite"
import CreateModelModal from "./CreateModelModal";

const SelectComplectationName = React.forwardRef((props, ref) => <SelectPicker locale={selectPickerLocale} label="Название комплектации" labelKey="name" valueKey="id" {...props} ref={ref} />)

const SelectModel = React.forwardRef((props, ref) => <SelectAdd label="Название модели" Modal={CreateModelModal} {...props} ref={ref} />)

function CreateComplectationModal(props) {
  const { complectations, models } = useStore()
  const { isOpen, onClose } = props

  const [formValue, setFormValue] = React.useState({
    complectationNameId: '',
    modelId: '',
    price: ''
  });
  const [isLoading, setLoading] = React.useState(false)

  const handleSubmit = () => {
    const { complectationNameId, modelId, price } = formValue
    if ((complectationNameId || complectationNameId === 0) && (modelId || modelId === 0) && price) {
      setLoading(true)
      complectations.create({
        complectationNameId: Number(complectationNameId),
        modelId: Number(modelId),
        price: Number(price)
      }).then(() => {
        onClose()
      })
    }
  }

  const handleClose = () => {
    onClose()
  };

  return (
    <Modal open={isOpen} onClose={handleClose} size="xs">
      <Modal.Header>
        <Modal.Title>Новая модель</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form fluid onChange={setFormValue} formValue={formValue}>
          <Form.Group>
            <Form.Control accepter={SelectComplectationName} data={complectations.names} name="complectationNameId" />
          </Form.Group>
          <Form.Group>
            <Form.Control accepter={SelectModel} data={models.list} name="modelId" />
          </Form.Group>
          <Form.Group>
            <Form.Control name="price" placeholder="Цена" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit} disabled={isLoading} appearance="primary">
          Confirm
        </Button>
        <Button onClick={handleClose} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default observer(CreateComplectationModal)
