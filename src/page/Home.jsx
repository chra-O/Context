import React from "react";
import Card from "../component/Card";

export default function Home() {
  const data = [
    { name: "burger", price: "30$" },
    { name: "pizza", price: "10$" },
    { name: "pasta", price: "5$" },
    { name: "cake", price: "3$" },
  ];
  return (
    <div className="bg-slate-200 h-screen p-20">
      <div className="grid grid-cols-4 gap-10">
        {data.map((item, index) => (
          <Card key={index} title={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
}
