import "./App.css";
import { Parallax } from "react-parallax";
import Woman from "./images/woman.jpg";
import City from "./images/city.jpg";
import Fly from "./images/fly.jpg";

function App() {
  return (
    <div className="App">
      <Parallax strength={300} bgImage={Woman}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div>
      </Parallax>

      <Parallax strength={300} blur={{ min: -5, max: 15 }} bgImage={City}>
        <div className="content">
          <div className="text-content">Blur</div>
        </div>
      </Parallax>

      <Parallax strength={-600} bgImage={Fly}>
        <div className="content">
          <div className="text-content">Reverse Parallax</div>
        </div>
      </Parallax>

      <div className="content"></div>
    </div>
  );
}

export default App;
