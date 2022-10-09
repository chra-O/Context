import { createContext, useState, useReducer } from "react";

const CountContext = createContext();
// const [product, setproduact] = useState({});
// data akaina am providerawa
export function CountProvider({ children }) {
  const initialSate = 0;
  const reducer = (state, action) => {
    if (action == "increment") {
      return state + 1;
    }

    if (action == "decrement") {
      return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialSate);

  console.log("app" + count);
  return (
    <CountContext.Provider
      value={{ countstate: count, dispatchSate: dispatch }}
    >
      {children}
    </CountContext.Provider>
  );
}

export default CountContext;
