import * as Popover from "@radix-ui/react-popover";
import * as Checkbox from "@radix-ui/react-checkbox";
import { ProgressBar } from "./ProgressBar";
import { Check } from "phosphor-react";

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

        <div className="mt-6 flex flex-col gap3">
          <Checkbox.Root className="flex items-center gap-3 group  ">
            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
              <Checkbox.Indicator>
                <Check size={20} className="text-white" />
              </Checkbox.Indicator>
            </div>

            <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400 group-">
              2L de água
            </span>
          </Checkbox.Root>
        </div>
      </Popover.Content>
    </Popover.Portal>
  );
}
