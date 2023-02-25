import * as Checkbox from "@radix-ui/react-checkbox";
import dayjs from "dayjs";
import { Check } from "phosphor-react";
import { useEffect, useState } from "react";
import { getHabitTasklist, toggleHabit } from "../lib/axios";

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

  async function handleToggle(habitId: string) {
    const isHabitCompleted = taskList!.completedHabits.includes(habitId);

    try {
      await toggleHabit(habitId);
      let completedHabits: string[] = [];

      if (isHabitCompleted) {
        completedHabits = taskList!.completedHabits.filter(
          (id) => id !== habitId
        );
      } else {
        completedHabits = [...taskList!.completedHabits, habitId];
      }

      setTaskList({
        possibleHabits: taskList!.possibleHabits,
        completedHabits,
      });
    } catch (error) {
      console.log(error);
      alert("Erro ao marcar hábito");
    }
  }

  const isDatePast = dayjs(date).endOf("day").isBefore(new Date());

  return (
    <div className="mt-6 flex flex-col gap-3">
      {taskList?.possibleHabits.map((habit) => (
        <Checkbox.Root
          key={habit.id}
          disabled={isDatePast}
          checked={taskList.completedHabits.includes(habit.id)}
          onCheckedChange={() => handleToggle(habit.id)}
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
