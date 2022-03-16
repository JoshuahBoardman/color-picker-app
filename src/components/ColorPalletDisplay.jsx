import React from 'react'
import Color from './Color'

const ColorPalletDisplay = ({ interfaceWidth, slicededPallet, setPallet, color, setColor }) => {
  return (
    <main className='color-pallet-display' style={{marginLeft: interfaceWidth + "rem"}}>
        <h2 className="color-pallet-title">Click a color to change</h2>
        <div className="color-pallet">
            {
              slicededPallet().map(palletColor => (
                <Color key={palletColor.id} palletColor={palletColor} setPallet={setPallet} color={color} setColor={setColor} />
              ))
            }
        </div>
    </main>
  )
}

export default ColorPalletDisplay