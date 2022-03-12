import Header from "./components/Header";
import ColorPalletInterface from "./components/ColorPalletInterface";
import ColorPalletDisplay from "./components/ColorPalletDisplay";
import Footer from "./components/Footer";

//TODO make ColorPallet Interface a collapsible sidebar
function App() {
  return (
    <div className="App">
      <Header />
      <ColorPalletInterface />
      <ColorPalletDisplay />
      <Footer />
    </div>
  );
}

export default App;
