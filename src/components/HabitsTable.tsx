import { generateDaysOfYear } from "../utils/generateDaysOfYear";
import { TableDay } from "./TableDay";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const daysOfYear = generateDaysOfYear();

export function HabitsTable() {
  const minimumTableDays = 18 * 7;
  const daysToFill = Math.abs(daysOfYear.length - minimumTableDays);

  const data = {
    completed: 4,
    amount: 6,
  };

  return (
    <div className="w-full max-w-5xl flex ">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((d, i) => (
          <div
            key={i}
            className="text-zinc-400 h-10 w-10 flex items-center justify-center"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {daysOfYear.map((d, i) => (
          <TableDay key={i} completed={data.completed} amount={data.amount} />
        ))}
        {daysToFill > 0 &&
          Array.from({ length: daysToFill }).map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 bg-zinc-900 border-2 border-zinc-900 rounded-lg opacity-40 cursor-not-allowed"
            />
          ))}
      </div>
    </div>
  );
}
