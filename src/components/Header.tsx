import logo from "../assets/images/logo.svg";
import { CreateHabitDialog } from "./CreateHabitDialog";

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logo} alt="logo" />

      <CreateHabitDialog />
    </div>
  );
}
