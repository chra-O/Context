import React from "react";

import CardContext from "../Context/CardContext";
import { useContext } from "react";


export default function Submet() {
  const { item } = useContext(CardContext);
  return (
    <div className="h-screen bg-slate-200 p-6 grid grid-cols-4">
      {item.map((item, index) => (
        <>
          <div className="bg-white rounded-xl w-[300px] h-[300px] shadow-sm flex items-center justify-center">
            <div className="text-center">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
