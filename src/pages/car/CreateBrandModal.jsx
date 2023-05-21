import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite"
import React from "react"
import { Button, Form, Modal } from "rsuite"

function CreateBrandModal(props) {
  const { brands } = useStore()
  const { isOpen, onClose } = props

  const [formValue, setFormValue] = React.useState({
    name: ''
  });
  const [isLoading, setLoading] = React.useState(false)

  const handleSubmit = () => {
    if (formValue.name.trim()) {
      setLoading(true)
      brands.create(formValue.name).then(() => {
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
        <Modal.Title>Новый брэнд</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form fluid onChange={setFormValue} formValue={formValue}>
          <Form.Group controlId="name-9">
            <Form.Control name="name" placeholder="Название бренда" />
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

export default observer(CreateBrandModal)
