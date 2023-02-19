import { useState } from "react";
import { Habit } from "./components/Habit";
import "./styles/global.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Habit text={"Sample Text"} />
    </>
  );
}

export default App;
