import { useState } from "react";
import logo from "../assets/images/logo.svg";

import * as Phosphor from "phosphor-react";

import { CreateHabitForm } from "./CreateHabitForm";
import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logo} alt="logo" />

      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          onClick={() => setShowModal(!showModal)}
          className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-2 hover:border-violet-300"
        >
          <Phosphor.Plus size={20} className="text-violet-500" />
          Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute p-1 right-4 top-4 text-zinc-400 rounded-full hover:text-zinc-300 hover:bg-zinc-700">
              <Phosphor.X size={24} aria-label="fechar" />
            </Dialog.Close>
            <Dialog.Title className="text-3xl leading-tight font-extrabold ">
              Criar hábito
            </Dialog.Title>
            <CreateHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
