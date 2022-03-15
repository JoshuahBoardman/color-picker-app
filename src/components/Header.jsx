import React from 'react'

const Header = ({ interfaceWidth, handleIsInterfaceOpen}) => {
  return (
    <header className='header'>
        <button className="open-btn" onClick={() => handleIsInterfaceOpen()}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <h1 className="logo" style={{marginLeft: interfaceWidth + "rem"}}>Color Pallet Builder</h1>
    </header>
  )
}

export default Header