import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
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
      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <Popover.Arrow className="fill-zinc-900" height={8} width={16} />
          <span className="font-semibold text-zinc-400">Terça-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            23/02
          </span>
          <ProgressBar progress={progress} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
