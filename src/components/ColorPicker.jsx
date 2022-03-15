import React, { useState } from 'react'
import { HexColorPicker } from "react-colorful";

const ColorPicker = () => {   
    const [ color, setColor ] = useState("#fff")

    // This Component handles the selecting of a color
  return (
    <div className='color-picker'>
        <h3 className="color-picker-header">Color Picker</h3>

        <HexColorPicker color={color} onChange={setColor} />

        <form action="" className="color-picker-form">
            <label htmlFor="hex-input">HEX:</label>
            <input type="text" className="color-input" id="hex-input" value={color} onChange={e => setColor(e.target.value)}/>
        </form>
    </div>
  )
}

export default ColorPicker