import { createContext, useState } from "react";

const CardContext = createContext();
// const [product, setproduact] = useState({});
// data akaina am providerawa
export function CardProvider({ children }) {
  const [item, setitem] = useState([]);
  const add = (name, price) => {
    setitem((prev) => [...prev, { name, price }]);
  };
  return (
    <CardContext.Provider value={{ item , add }}>{children}</CardContext.Provider>
  );
}

export default CardContext;
