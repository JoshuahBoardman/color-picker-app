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
      style={ selcetedPalletItem.id === palletColor.id ?{backgroundColor: palletItemColor, border: ".15rem solid #fff", borderRadius: ".25rem"} : 
      {backgroundColor: palletItemColor}
      } 
      onClick={handleOnClick}
    >
        <h4 className='color-value'>{palletItemColor}</h4>
    </div>
  )
}

export default Color