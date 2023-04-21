import { Plus } from "@rsuite/icons/lib/icons/";
import React from "react";
import { Button } from "rsuite";

function AddButton({ onClick }) {
  return (
    <Button appearance="primary" onClick={onClick}>
      <Plus />
    </Button>
  );
}

export default AddButton;
