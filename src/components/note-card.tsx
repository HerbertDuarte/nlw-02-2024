import * as Dialog from "@radix-ui/react-dialog";

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
            {note.date.toISOString()}
          </span>
          <p className="text-slate-400 text-sm leading-5 ">{note.content}</p>
          <div className="absolute bg-gradient-to-b from-transparent to-black/60 left-0 right-0 bottom-0 h-1/3 pointer-events-none" />
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 outline-none flex flex-col w-full max-w-[640px] h-[60vh]">
          <div className="flex flex-1">
            <div className="h-full space-y-3 bg-slate-800 outline-none text-left rounded-md p-5 overflow-hidden relative">
              <span className="text-slate-300 text-sm font-medium">
                {note.date.toISOString()}
              </span>
              <p className="text-slate-400 text-sm leading-5 ">
                {note.content}
              </p>
              <div className="absolute bg-gradient-to-b from-transparent to-black/60 left-0 right-0 bottom-0 h-1/3 pointer-events-none" />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
