import "./styles/global.css";

import { useState } from "react";
import { Header } from "./components/Header";
import { HabitsTable } from "./components/HabitsTable";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-background text-white font-bold w-screen h-screen flex justify-center items-center flex-col">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <Header />
        <HabitsTable />
      </div>
    </div>
  );
}
