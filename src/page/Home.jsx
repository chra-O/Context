import { React, useContext } from "react";
import CountContext from "../Context/CardContext";

// import CardContext from "../Context/CardContext";

export default function Home() {
  const countstate = useContext(CountContext);
  console.log(countstate);
  return (
    <div className="bg-slate-200 h-screen p-20">
      <div className="grid grid-cols-4 gap-10 mb-10">
        number : {countstate.countstate}{" "}
      </div>
      <button
        onClick={() => countstate.dispatchSate('increment')}
        className="w-32 border bg-white  border-black p-2 mr-10"
      >
        +
      </button>
      <button
        onClick={() => countstate.dispatchSate("decrement")}
        className="w-32 border bg-white  border-black  p-2 "
      >
        -
      </button>
    </div>
  );
}
