import { React, useReducer } from "react";

import { Link } from "react-router-dom";

export default function() {
  return (
    <>
      <div className="w-full bg-white">
        <Link to="/submet">
          {" "}
          <button className="bg-white shadow-sm   p-6">
            {" "}
            Counter 
            {/* check {item.length} */}
          </button>
        </Link>
      </div>
    </>
  );
}
