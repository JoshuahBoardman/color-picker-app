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
          <div className="input-pair">
            <label htmlFor="hex-input">HEX:</label>
            <input type="text" className="color-input" id="hex-input" />
          </div>
            
          <div className="input-pair">
            <label htmlFor="rgb-input">RGB:</label>
            <input type="text" className="color-input" id="rgb-input" />
          </div>

          <div className="input-pair">
            <label htmlFor="hsv-input">HSV:</label>
            <input type="text" className="color-input" id="hsv-input" />
          </div>

          <div className="input-pair">
            <label htmlFor="hsl-input">HSL:</label>
            <input type="text" className="color-input" id="hsl-input" />
          </div>
        </form>
    </div>
  )
}

export default ColorPicker