import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ColorPalletDisplay from "./components/ColorPalletDisplay";
import ColorPalletInterface from "./components/ColorPalletInterface";

//TODO make ColorPallet Interface a collapsible sidebar
function App() {
  const [isInterfaceOpen, setIsInterfaceOpen] = useState(true);
  const [interfaceWidth, setInterfaceWidth] = useState(22);

  const handleIsInterfaceOpen = () => {
    setIsInterfaceOpen(!isInterfaceOpen);
  }
  
  useEffect(() => {
    if (isInterfaceOpen) {
      setInterfaceWidth(22)
    } else {
      setInterfaceWidth(0)
    }
  }, [isInterfaceOpen, interfaceWidth])
  
  return (
    <>
      <Header interfaceWidth={interfaceWidth} handleIsInterfaceOpen={handleIsInterfaceOpen} />
      <ColorPalletInterface handleIsInterfaceOpen={handleIsInterfaceOpen} interfaceWidth={interfaceWidth}/>
      <ColorPalletDisplay interfaceWidth={interfaceWidth} />
    </>
  );
}

export default App;
