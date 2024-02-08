import * as Dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { X } from "lucide-react";

interface NoteCardProps {
  note: {
    date: Date;
    content: string;
  };
}

export function NoteCard({ note }: NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="bg-slate-800 outline-none text-left rounded-md p-5 overflow-hidden relative hover:ring-2 hover:ring-slate-700 focus-visible:ring-2 focus-visible:ring-lime-200/40">
        <div className="h-full  space-y-3">
          <span className="text-slate-300 text-sm font-medium">
            {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true })}
          </span>
          <p className="text-slate-400 text-sm leading-5 ">{note.content}</p>
          <div className="absolute bg-gradient-to-b from-transparent to-black/60 left-0 right-0 bottom-0 h-1/3 pointer-events-none" />
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 outline-none flex flex-col rounded-md w-[95%] max-w-[640px] h-[60vh] overflow-hidden">
        <>
          <Dialog.Close className="fixed top-0 right-0 z-20 justify-end p-1.5 bg-slate-800 text-slate-300 rounded-bl">
            <X className="size-5"/>
          </Dialog.Close>
        </>
          <div className="flex flex-col flex-1 h-full w-full space-y-3 bg-slate-700 outline-none text-left p-5 relative">
            <span className="text-slate-300 text-sm font-medium">
              {formatDistanceToNow(note.date, {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>
            <p className="text-slate-400 text-sm leading-5 ">{note.content}</p>
          </div>
          <button
            type="button"
            onClick={() => console.log("delete note")}
            className="w-full bg-slate-800 text-slate-300 py-2 group"
          >
            Deseja{" "}
            <span className="text-red-400 group-hover:underline">
              apagar essa nota
            </span>
            ?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
