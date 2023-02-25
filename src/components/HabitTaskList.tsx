import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { useEffect, useState } from "react";
import { getHabitTasklist } from "../lib/axios";

interface HabitTaskListProps {
  date: Date;
}

interface Habits {
  possibleHabits: {
    id: string;
    title: string;
    createdAt: string;
  }[];
  completedHabits: string[];
}

export function HabitTaskList({ date }: HabitTaskListProps) {
  const [taskList, setTaskList] = useState<Habits>();

  async function fetchData() {
    try {
      const res = await getHabitTasklist(date);
      setTaskList(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-6 flex flex-col gap-3">
      {taskList?.possibleHabits.map((habit) => (
        <Checkbox.Root
          key={habit.id}
          checked={taskList.completedHabits.includes(habit.id)}
          className="flex items-center gap-3 group  "
        >
          <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
            <Checkbox.Indicator>
              <Check size={20} className="text-white" />
            </Checkbox.Indicator>
          </div>

          <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
            {habit.title}
          </span>
        </Checkbox.Root>
      ))}
    </div>
  );
}
