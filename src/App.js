import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Submet from "./page/Submet";

function App() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="w-full bg-white">
          <Link to="/submet">
            {" "}
            <button className="bg-white shadow-sm   p-6"> check 0</button>
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submet" element={<Submet />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
