import React from "react"
import { Input, InputGroup, Popover, Whisper } from "rsuite"
import { ColorPicker, useColor } from "react-color-palette"
import style from "./style"

/* eslint-disable react/jsx-props-no-spreading */

function SelectColor(props) {
  const { defaultColor, onSelect = () => {} } = props

  const [color, setColor] = useColor("hex", defaultColor)

  const changeHandler = () => {
    onSelect(color.hex)
  }

  return (
    <div className={style.wrap}>
      <Whisper
        trigger="click"
        placement="auto"
        onClose={changeHandler}
        speaker={
          <Popover arrow>
            <ColorPicker width={456} height={228} color={color} onChange={setColor} hideHSV hideRGB hideHEX />
          </Popover>
        }
      >
        <InputGroup>
          <Input className={style.select} value={color.hex} {...props} onSelect={undefined} />
          <InputGroup.Addon
            style={{
              backgroundColor: color.hex,
              width: "50%"
            }}
          />
        </InputGroup>
      </Whisper>
    </div>
  )
}

export default SelectColor
