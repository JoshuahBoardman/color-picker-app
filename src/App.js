import Header from "./components/Header";
import ColorPalletDisplay from "./components/ColorPalletDisplay";
import ColorPalletInterface from "./components/ColorPalletInterface";

//TODO make ColorPallet Interface a collapsible sidebar
function App() {
  return (
    <>
      <Header />
      <ColorPalletInterface />
      <ColorPalletDisplay />
    </>
  );
}

export default App;
