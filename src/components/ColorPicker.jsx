import React, { useState } from 'react'
import { HexColorPicker } from "react-colorful";

const ColorPicker = () => {   
    const [ color, setColor ] = useState("#fff")

  return (
    <div className='color-picker'>
        <HexColorPicker color={color} onChange={setColor} />
    </div>
  )
}

export default ColorPicker