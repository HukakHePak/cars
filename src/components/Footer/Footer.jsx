import React from "react"
import { Footer as Wrap } from "rsuite"

import style from "./style"

function Footer() {
  return (
    <Wrap className={style.footer}>
      <div className={style.contacts}>
        <a href="mailto:nikak_ne_rak@mail.ru">nikak_ne_rak@mail.ru</a>
        <a href="https://github.com/HukakHePak">github.com/HukakHePak</a>
      </div>
      <span> © Copyright, CarSetup Inc. 2023</span>
    </Wrap>
  )
}

export default Footer
