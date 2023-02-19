interface HabitProps {
  text: string;
}

export function Habit(props: HabitProps) {
  return (
    <div className="bg-zinc-900 p-3 w-fit text-white rounded m-2 text-center">
      {props.text}
    </div>
  );
}
