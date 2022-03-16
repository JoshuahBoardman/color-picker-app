import React from 'react'
import ColorPicker from './ColorPicker'
import PalletSettings from './PalletSettings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

// TODO add Range Sliders to the interface

const ColorPalletInterface = ({ handleIsInterfaceOpen, interfaceWidth, colorPalletSize, setColorPalletSize, color, setColor }) => {

  
  return (
    <div className='color-pallet-interface' style={{width: interfaceWidth + "rem"}}>
      <div className="color-pallet-interface-inner-wrapper">
          <h2 className='color-pallet-interface-header'>Pallet Menu</h2>
              <div className="color-pallet-interface-body">
                <PalletSettings colorPalletSize={colorPalletSize} setColorPalletSize={setColorPalletSize}/>
                <ColorPicker color={color} setColor={setColor}/>
              </div>
      </div>
      <button className="close-btn" onClick={() => handleIsInterfaceOpen()}>
        <FontAwesomeIcon icon={faAnglesLeft} />
      </button>
    </div>
  )
}

export default ColorPalletInterface