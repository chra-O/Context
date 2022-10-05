import React from "react";
import CardContext from "../Context/CardContext";
import { useContext } from "react";

export default function Card({ title, price }) {
  const { add } = useContext(CardContext);
  return (
    <div className="bg-white rounded-xl w-[300px] h-[300px] shadow-sm flex items-center justify-center">
      <div>
        <div className="text-center">
          <p> {title}</p>

          {price}
        </div>
        <button
          onClick={() => {
            add( title, price );
          }}
          className="mt-5 bg-gray-500 p-1 rounded-sm  text-white px-4"
        >
          Add
        </button>
      </div>
    </div>
  );
}
