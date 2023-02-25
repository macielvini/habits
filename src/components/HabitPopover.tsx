import * as Popover from "@radix-ui/react-popover";
import dayjs from "dayjs";
import { HabitTaskList } from "./HabitTaskList";
import { ProgressBar } from "./ProgressBar";

interface HabitProps {
  date: Date;
  progress: number;
  handleCompletedChange: (completed: number) => void;
}

export function HabitPopover({
  date,
  progress,
  handleCompletedChange,
}: HabitProps) {
  const dayAndMonth = dayjs(date).format("DD/MM");
  const weekDay = dayjs(date).format("dddd");

  return (
    <Popover.Portal>
      <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
        <Popover.Arrow className="fill-zinc-900" height={8} width={16} />
        <span className="font-semibold text-zinc-400">{weekDay}</span>
        <span className="mt-1 font-extrabold leading-tight text-3xl">
          {dayAndMonth}
        </span>
        <ProgressBar progress={progress} />
        <HabitTaskList
          date={date}
          handleCompletedChange={handleCompletedChange}
        />
      </Popover.Content>
    </Popover.Portal>
  );
}
