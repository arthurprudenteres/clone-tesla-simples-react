import Model from "./components/Model";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[url('./assets/image/Homepage-Model-3-LHD-Mobile.jpeg')] lg:bg-[url('./assets/image/Homepage-Model-3-Desktop-LHD.jpeg')] h-screen bg-cover bg-center">
      <Navbar />
      <Model />
    </div>
  );
}

export default App;
