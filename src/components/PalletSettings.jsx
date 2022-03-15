import React from 'react'

const PalletSettings = () => {
  return (
    <>
      <h3 className="pallet-settings-header">Pallet Settings</h3>
      <form action="" className="pallet-settings">
        <label htmlFor="color-pallet-size-range color-pallet-size-text">Color Pallet Size:</label>
        <div className="color-pallet-size-wrapper">
          <input type="range" className="color-pallet-size-range" id="color-pallet-size-range" />
          <input type="number" className="color-pallet-size-text" id="color-pallet-size-text" />
        </div>

        <div className="color-pallet-display-type-wrapper">
          <label htmlFor="color-pallet-display">Display Type:</label>
          <select name="" id="color-pallet-display-type" className="color-pallet-display-type">
                  <option value="pallet">Pallet</option>
                  <option value="gradiant">Gradiant</option>
            </select>
        </div>
      </form>
          
    </>
  )
}

export default PalletSettings