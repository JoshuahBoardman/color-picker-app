import React, { useState, useEffect } from 'react'

const Color = ({ palletColor, setColor, selcetedPalletItem,  setSelectedPalletItem, color }) => {
  const [palletItemColor, setPalletItemColor] = useState(palletColor.color)

  function handleOnClick() {
    setColor(palletItemColor)
    setSelectedPalletItem({id: palletColor.id, color:palletItemColor})
  }

  useEffect(() => {
    if(selcetedPalletItem.id === palletColor.id) {
      setPalletItemColor(color)
    }
  }, [color, selcetedPalletItem, palletColor])

  return (
    <div className="color" 
      style={ selcetedPalletItem.id === palletColor.id ?{backgroundColor: palletItemColor, border: ".2rem solid #fff", borderRadius: ".25rem"} : 
      {backgroundColor: palletItemColor}
      } 
      onClick={handleOnClick}
    >
        <span>{palletItemColor}</span>
    </div>
  )
}

export default Color