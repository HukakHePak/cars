import React from "react"
import { observer } from "mobx-react-lite"
import useStore from "hooks/useStore"
import Application from "./Application"
import Landing from "./Landing"

function Switcher() {
  const { auth } = useStore()

  return auth.isLogged ? <Application /> : <Landing />
}

export default observer(Switcher)
