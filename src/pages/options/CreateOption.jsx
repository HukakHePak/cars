import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Button, ButtonToolbar, Form } from "rsuite";
import { User } from "stores/models/user";
import SelectAdd from "components/Input/SelectAdd";
import style from "./style";

function CreateOption() {
  const { auth, options } = useStore();

  const [error, setError] = useState();
  const handleFormSubmit = () => {
    auth.user.setUser(formValue, true).catch((err) => {
      setError(err);
    });
  };

  const handleFormValueChange = (v) => {
    setFormValue(v);
  };

  return (
    <Form
      onSubmit={handleFormSubmit}
      onChange={handleFormValueChange}
      formError={error}
      className={style.form}
    >
      <Form.Group controlId="name-1">
        <Form.ControlLabel>Name</Form.ControlLabel>
        <Form.Control name="name" maxLength={45} />
      </Form.Group>
      <Form.Group controlId="type-id-1">
        <Form.ControlLabel>Type</Form.ControlLabel>
        <SelectAdd
          data={options.typeList}
          label="Комплектация"
        />
      </Form.Group>
      <Form.Group controlId="patronymic-1">
        <Form.ControlLabel>Code</Form.ControlLabel>
        <Form.Control name="code" defaultValue="0000" maxLength={45} />
      </Form.Group>
      <Form.Group controlId="price-1">
        <Form.ControlLabel>Price</Form.ControlLabel>
        <Form.Control name="price" type="price" defaultValue={0} />
      </Form.Group>
      <Form.Group controlId="description-1">
        <Form.ControlLabel>Description</Form.ControlLabel>
        <Form.Control name="description" />
      </Form.Group>
      <Form.Group controlId="photo-1">
        <Form.ControlLabel>Photo</Form.ControlLabel>
        <Form.Control name="photo" maxLength={8} />
      </Form.Group>
      <Form.Group>
        <ButtonToolbar>
          <Button appearance="primary" type="submit">
            Submit
          </Button>
          <Button appearance="default" type="reset">
            Cancel
          </Button>
        </ButtonToolbar>
      </Form.Group>
    </Form>
  );
}

export default observer(CreateOption);
