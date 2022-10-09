import "./App.css";
import { createContext, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Submet from "./page/Submet";
// import { CardProvider } from "./Context/CardContext";

import Nav from "./component/Nav";
import { CountProvider } from "./Context/CardContext";

//

function App() {
  return (
    <>
      <div className="bg-gray-100">
        <Nav />
        <CountProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/submet" element={<Submet />} />
          </Routes>
        </CountProvider>
      </div>
    </>
  );
}

export default App;
