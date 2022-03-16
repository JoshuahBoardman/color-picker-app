import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = ({ interfaceWidth, handleIsInterfaceOpen}) => {
  return (
    <header className='header'>
        <button className="open-btn" onClick={() => handleIsInterfaceOpen()}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1 className="logo" style={{marginLeft: interfaceWidth + "rem"}}>Color Pallet Builder</h1>
    </header>
  )
}

export default Header