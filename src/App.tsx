import "./styles/global.css";

import { useState } from "react";
import { Header } from "./components/Header";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-background text-white w-screen h-screen flex justify-center items-center">
      <Header />
    </div>
  );
}
