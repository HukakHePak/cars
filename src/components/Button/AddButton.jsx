import React from "react";
import { Button } from "rsuite";

function AddButton({ onClick }) {
  return <Button onClick={onClick}> + </Button>;
}

export default AddButton;
