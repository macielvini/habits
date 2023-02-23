import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import { HabitPopover } from "./HabitPopover";
import { ProgressBar } from "./ProgressBar";

interface TableDayProps {
  completed: number;
  amount: number;
}

export function TableDay({ completed, amount }: TableDayProps) {
  completed = Math.floor(Math.random() * 6);

  const progress = Math.floor((completed / amount) * 100);

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10 border-2 rounded-lg cursor-pointer", {
          "bg-zinc-900 border-zinc-800": progress === 0,
          "bg-violet-900 border-violet-600": progress > 0 && progress < 20,
          "bg-violet-800 border-violet-600": progress >= 20 && progress < 40,
          "bg-violet-700 border-violet-500": progress >= 40 && progress < 60,
          "bg-violet-600 border-violet-500": progress >= 60 && progress < 80,
          "bg-violet-500 border-violet-400": progress >= 80,
        })}
      />
      <HabitPopover
        progress={progress}
        date={"23/02"}
        weekDay={"Terça-feira"}
      />
    </Popover.Root>
  );
}
