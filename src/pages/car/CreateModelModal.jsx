import SelectAdd from "components/Input/SelectAdd";
import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite"
import React from "react"
import { Button, Form, Modal, SelectPicker } from "rsuite"
import CreateBrandModal from "./CreateBrandModal";

const SelectBrand = React.forwardRef((props, ref) => <SelectAdd label="Брэнд" Modal={CreateBrandModal} {...props} ref={ref} />)

function CreateModelModal(props) {
  const { cars, brands, models } = useStore()
  const { isOpen, onClose } = props

  const [formValue, setFormValue] = React.useState({
    brandId: null,
    name: '',
    description: '',
    photo: ''
  });
  const [isLoading, setLoading] = React.useState(false)

  const handleSubmit = () => {
    const { brandId, name, description, photo } = formValue
    if (brandId !== null && name.trim() && description.trim() && photo.trim()) {
      const brand = brands.list.find((brand) => brand.id === brandId)
      setLoading(true)
      models.create({
        ...formValue,
        brand,
        brandId: undefined
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
            <Form.Control accepter={SelectBrand} data={brands.list} name="brandId" />
          </Form.Group>
          <Form.Group>
            <Form.Control name="name" placeholder="Название модели" />
          </Form.Group>
          <Form.Group>
            <Form.Control name="description" placeholder="Описание" />
          </Form.Group>
          <Form.Group>
            <Form.Control name="photo" placeholder="Ссылка на фото" />
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

export default observer(CreateModelModal)
