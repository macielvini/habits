import logo from "../assets/images/logo.svg";
import * as Phosphor from "phosphor-react";

export function Header() {
  return (
    <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
        <img src={logo} alt="logo" />
        <button
          type="button"
          className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-2 hover:border-violet-300"
        >
          <Phosphor.Plus size={20} className="text-violet-500" />
          Novo hábito
        </button>
      </div>
    </div>
  );
}
