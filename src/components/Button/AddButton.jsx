import { Plus } from "@rsuite/icons/lib/icons/"
import { observer } from "mobx-react-lite"
import React from "react"
import { Button } from "rsuite"

function AddButton({ onClick, ...props }) {
  return (
    <Button appearance="primary" onClick={onClick} {...props}>
      <Plus />
    </Button>
  )
}

export default observer(AddButton)
