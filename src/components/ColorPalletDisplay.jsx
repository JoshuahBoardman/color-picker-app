import React from 'react'
import Color from './Color'

const ColorPalletDisplay = () => {
  return (
    <main className='color-pallet-display'>
        <h2 className="color-pallet-title">Click a color to change</h2>
        <div className="color-pallet">
            <Color />
            <Color />
            <Color />
            <Color />
            <Color />
            <Color />
            <Color />
            <Color />
            <Color />
            <Color />
            <Color />
            <Color />
        </div>
    </main>
  )
}

export default ColorPalletDisplay