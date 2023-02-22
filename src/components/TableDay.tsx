import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";

interface TableDayProps {
  completed: number;
  amount: number;
}

export function TableDay({ completed, amount }: TableDayProps) {
  const progress = Math.floor((completed / amount) * 100);

  return (
    <Popover.Root>
      <Popover.Trigger className="w-10 h-10 bg-zinc-900 border-2 border-zinc-900 rounded-lg cursor-pointer" />
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
