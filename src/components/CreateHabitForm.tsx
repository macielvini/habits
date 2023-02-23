import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { FormEvent } from "react";
import { useState } from "react";

const availableWeekDays = [
  "Doming",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function CreateHabitForm() {
  const [title, setTitle] = useState("");
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function formSubmitHandler(e: FormEvent) {
    e.preventDefault();
  }

  function handleToggleWeekDay(index: number) {
    if (weekDays.includes(index)) {
      const updatedWeekDays = weekDays.filter((w) => w !== index);
      setWeekDays(updatedWeekDays);
    } else {
      setWeekDays([...weekDays, index]);
    }
  }

  return (
    <form onSubmit={formSubmitHandler} className="w-full flex flex-col mt-6 ">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento
      </label>

      <input
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        type="text"
        name="title"
        id="title"
        placeholder="ex.: Exercícios, dormir bem..."
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a recorrência
      </label>

      <div className="flex flex-col gap-2 mt-3">
        {availableWeekDays.map((d, i) => (
          <Checkbox.Root
            key={i}
            className="flex items-center gap-3 group"
            onCheckedChange={() => handleToggleWeekDay(i)}
          >
            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
              <Checkbox.Indicator>
                <Check size={20} className="text-white" />
              </Checkbox.Indicator>
            </div>

            <span className="text-white leading-tight">{d}</span>
          </Checkbox.Root>
        ))}
      </div>

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500"
      >
        <Check size={20} />
        Confirmar
      </button>
    </form>
  );
}
