import React from "react";
import CardContext from "../Context/CardContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function() {
  const { item } = useContext(CardContext);
  return (
    <>
      <div className="w-full bg-white">
        <Link to="/submet">
          {" "}
          <button className="bg-white shadow-sm   p-6">
            {" "}
            check {item.length}
          </button>
        </Link>
      </div>
    </>
  );
}
