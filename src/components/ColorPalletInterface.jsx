import React from 'react'
import ColorPicker from './ColorPicker'
import PalletSettings from './PalletSettings'

// TODO add Range Sliders to the interface

const ColorPalletInterface = ({ handleIsInterfaceOpen, interfaceWidth }) => {

  
  return (
    <div className='color-pallet-interface' style={{width: interfaceWidth + "rem"}}>
      <div className="color-pallet-interface-inner-wrapper">
          <h2 className='color-pallet-interface-header'>Pallet Menu</h2>
              <div className="color-pallet-interface-body">
                <PalletSettings />
                <ColorPicker />
              </div>
      </div>
      <button className="close-btn" onClick={() => handleIsInterfaceOpen()}>
        <i className="fa-solid fa-angles-left"></i>
      </button>
    </div>
  )
}

export default ColorPalletInterface