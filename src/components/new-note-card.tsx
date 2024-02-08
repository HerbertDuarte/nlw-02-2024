import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function NewNoteCard() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-slate-700 outline-none text-left rounded-md p-5 overflow-hidden relative hover:ring-2 hover:ring-slate-500 focus-visible:ring-2 focus-visible:ring-lime-200/40">
        <div className="h-full text-left space-y-3 ">
          <span className="text-slate-200 text-sm font-medium">
            Adicionar nota
          </span>
          <p className="text-slate-400 text-sm leading-5">
            Grave uma nota em áudio que será convertida para texto
            automaticamente.
          </p>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 outline-none flex flex-col rounded-md w-[95%] max-w-[640px] h-[60vh] overflow-hidden">
          <Dialog.Close className="fixed top-0 right-0 z-20 justify-end p-1.5 bg-slate-800 text-slate-300 rounded-bl">
            <X className="size-5" />
          </Dialog.Close>
          <div className="flex flex-col flex-1 h-full w-full space-y-3 bg-slate-700 outline-none text-left p-5 relative">
            <span className="text-slate-300 text-sm font-medium">
              Adicionar nota
            </span>
            <p className="text-slate-400 text-sm leading-5 ">
              Comece <button type="button" className="text-lime-400">gravando uma nota</button> em
              áudio ou se preferir{" "}
              <button type="button" className="text-lime-400">utilize apenas texto</button>
            </p>
          </div>
          <button
            type="button"
            onClick={() => console.log("delete note")}
            className="w-full bg-lime-400 text-slate-900 font-bold py-2 group"
          >
            Salvar nota
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
