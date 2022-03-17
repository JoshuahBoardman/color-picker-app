import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ColorPalletDisplay from "./components/ColorPalletDisplay";
import ColorPalletInterface from "./components/ColorPalletInterface";
import randomHexColor from "random-hex-color";

//TODO make ColorPallet Interface a collapsible sidebar
function App() {

  const [colorPalletSize, setColorPalletSize] = useState(4);
  // TODO generate the array from the color pallet size
  const [pallet] = useState([
      {id: 1, color: randomHexColor()},
      {id: 2, color: randomHexColor()},
      {id: 3, color: randomHexColor()},
      {id: 4, color: randomHexColor()},
      {id: 5, color: randomHexColor()},
      {id: 6, color: randomHexColor()},
      {id: 7, color: randomHexColor()},
      {id: 8, color: randomHexColor()},
      {id: 9, color: randomHexColor()},
      {id: 10, color: randomHexColor()},
      {id: 11, color: randomHexColor()},
      {id: 12, color: randomHexColor()},
      {id: 13, color: randomHexColor()},
      {id: 14, color: randomHexColor()},
      {id: 15, color: randomHexColor()},
      {id: 16, color: randomHexColor()}
  ]);
  const [selcetedPalletItem, setSelectedPalletItem] = useState(pallet[0]);
  const [color, setColor ] = useState(selcetedPalletItem.color);
  const [isInterfaceOpen, setIsInterfaceOpen] = useState(true);
  const [interfaceWidth, setInterfaceWidth] = useState(22);

  useEffect(() => {
    if (isInterfaceOpen) {
      setInterfaceWidth(22)
    } else {
      setInterfaceWidth(0)
    }
  }, [isInterfaceOpen, interfaceWidth])
  
  function handleSetIsInterfaceOpen () {
    setIsInterfaceOpen(!isInterfaceOpen);
  }

 function slicededPallet() {
   return pallet.slice(0, colorPalletSize);
  }
  
  return (
    <>
      <Header 
        interfaceWidth={interfaceWidth} 
        handleIsInterfaceOpen={handleSetIsInterfaceOpen} 
      />

      <ColorPalletInterface 
        handleIsInterfaceOpen={handleSetIsInterfaceOpen} 
        colorPalletSize={colorPalletSize} 
        interfaceWidth={interfaceWidth} 
        setColorPalletSize={setColorPalletSize} 
        color={color} 
        setColor={setColor}
      />

      <ColorPalletDisplay 
        interfaceWidth={interfaceWidth} 
        colorPalletSize={colorPalletSize} 
        slicededPallet={slicededPallet} 
        setColor={setColor} 
        selcetedPalletItem={selcetedPalletItem}
        setSelectedPalletItem={setSelectedPalletItem}
        color={color}
      />
    </>
  );
}

export default App;
