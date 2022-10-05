import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Submet from "./page/Submet";
import { CardProvider } from "./Context/CardContext";
import Nav from "./component/Nav";

function App() {
  return (
    <>
      <CardProvider>
        <div className="bg-gray-100">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submet" element={<Submet />} />
          </Routes>{" "}
        </div>
      </CardProvider>
    </>
  );
}

export default App;
