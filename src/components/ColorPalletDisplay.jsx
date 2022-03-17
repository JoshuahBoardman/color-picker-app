import React from 'react'
import Color from './Color'

const ColorPalletDisplay = ({ interfaceWidth, slicededPallet, setColor, selcetedPalletItem, setSelectedPalletItem, color }) => {
  
  return (
    <main className='color-pallet-display' style={{marginLeft: interfaceWidth + "rem"}}>
        <h2 className="color-pallet-title">Click a color to change</h2>
        <div className="color-pallet">
            {
              slicededPallet().map(palletColor => (
                <Color 
                key={palletColor.id} 
                palletColor={palletColor} 
                setColor={setColor} 
                selcetedPalletItem={selcetedPalletItem}
                setSelectedPalletItem={setSelectedPalletItem}
                color={color}
                />
              ))
            }
        </div>
    </main>
  )
}

export default ColorPalletDisplay