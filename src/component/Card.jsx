import React from "react";

export default function Card(props) {
  return (
    <div className="bg-white rounded-xl w-[300px] h-[300px] shadow-sm flex items-center justify-center">
      <div>
        <div className="text-center">
          <p> {props.title}</p>

          {props.price}
        </div>
        <button className="mt-5 bg-gray-500 p-1 rounded-sm  text-white px-4">
          Add
        </button>
      </div>
    </div>
  );
}
