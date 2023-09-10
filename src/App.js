import "./App.css";
import Slider from "./components/carousel/Slider";
import Home from "./components/home/Home";
import Navs from "./components/navbar/Navs";

function App() {
  return (
    <div className="App">
      <Navs />
      <Slider />
      <Home />
    </div>
  );
}

export default App;
