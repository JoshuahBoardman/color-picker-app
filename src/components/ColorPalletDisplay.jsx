import React from 'react'
import Color from './Color'

const ColorPalletDisplay = ({ interfaceWidth, colorPalletSize, slicededPallet, setColor, selcetedPalletItem, setSelectedPalletItem, color }) => {
  
  return (
    <main className='color-pallet-display' style={{marginLeft: interfaceWidth + "rem"}}>
        <h2 className="color-pallet-title">Click a color to ajust its value</h2>
        <div className="color-pallet" style={ colorPalletSize < 4 ?
          {gridTemplateColumns: "repeat(3, 1fr)"} : 
          {gridTemplateColumns: "repeat(4, 1fr)"}}
        >
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