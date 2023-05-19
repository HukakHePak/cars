import React from "react"
import useStore from "hooks/useStore"
import { observer } from "mobx-react-lite"
import { isAccessed } from "utils/helpers"

function CanSee({ children, roles = [] }) {
  const { auth } = useStore()

  return isAccessed(roles, auth.user || {}) && children
}

export const Can = observer(CanSee)

export function can(component, roles = []) {
  return <Can roles={roles}>{component}</Can>
}
