import React from 'react'

const Color = ({ palletColor, setPallet, color, setColor }) => {
  console.log(palletColor)
  return (
    <div className="color" style={{backgroundColor: palletColor.color}} onClick={() => setColor(palletColor.color)}>
        <span>{palletColor.color}</span>
    </div>
  )
}

export default Color