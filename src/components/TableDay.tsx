import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import { useState } from "react";
import { HabitPopover } from "./HabitPopover";

interface TableDayProps {
  date: Date;
  defaultCompleted?: number;
  amount?: number;
}

export function TableDay({
  defaultCompleted = 0,
  amount = 0,
  date,
}: TableDayProps) {
  const [completed, setCompleted] = useState(defaultCompleted);

  const progress = amount > 0 ? Math.floor((completed / amount) * 100) : 0;

  function handleCompletedChange(completed: number) {
    setCompleted(completed);
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          "w-10 h-10 border-2 rounded-lg cursor-pointer transition-colors",
          {
            "bg-zinc-900 border-zinc-800": progress === 0,
            "bg-violet-900 border-violet-600": progress > 0 && progress < 20,
            "bg-violet-800 border-violet-600": progress >= 20 && progress < 40,
            "bg-violet-700 border-violet-500": progress >= 40 && progress < 60,
            "bg-violet-600 border-violet-500": progress >= 60 && progress < 80,
            "bg-violet-500 border-violet-400": progress >= 80,
          }
        )}
      />
      <HabitPopover
        progress={progress}
        date={date}
        handleCompletedChange={handleCompletedChange}
      />
    </Popover.Root>
  );
}
