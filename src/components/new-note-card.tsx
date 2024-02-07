export function NewNoteCard() {
  return (
    <button className="bg-slate-700 rounded-md p-5 hover:ring-2 hover:ring-slate-700 focus-visible:ring-2 focus-visible:ring-slate-700 overflow-hidden ">
      <div className="h-full text-left space-y-3 ">
        <span className="text-slate-200 text-sm font-medium">
          Adicionar nota
        </span>
        <p className="text-slate-400 text-sm leading-5">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </div>
    </button>
  );
}
