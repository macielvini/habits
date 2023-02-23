import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";

interface HabitProps {
  weekDay: string;
  date: string;
  progress: number;
}

export function HabitPopover({ weekDay, date, progress }: HabitProps) {
  return (
    <Popover.Portal>
      <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
        <Popover.Arrow className="fill-zinc-900" height={8} width={16} />
        <span className="font-semibold text-zinc-400">{weekDay}</span>
        <span className="mt-1 font-extrabold leading-tight text-3xl">
          {date}
        </span>
        <ProgressBar progress={progress} />
      </Popover.Content>
    </Popover.Portal>
  );
}
