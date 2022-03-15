import React from 'react'
import ColorPicker from './ColorPicker'
import PalletSettings from './PalletSettings'

// TODO add Range Sliders to the interface

const ColorPalletInterface = () => {
  return (
    <div className='color-pallet-interface'>
      <div className="color-pallet-interface-inner-wrapper">
          <h2 className='color-pallet-interface-header'>Color Pallet Interface</h2>
              <div className="color-pallet-interface-body">
                <PalletSettings />
                <ColorPicker />
              </div>
      </div>
    </div>
  )
}

export default ColorPalletInterface