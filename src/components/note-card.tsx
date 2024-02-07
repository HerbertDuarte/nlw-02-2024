export function NoteCard() {
  return (
    <button className="bg-slate-800 outline-none text-left rounded-md p-5 overflow-hidden relative hover:ring-2 hover:ring-slate-700 focus-visible:ring-2 focus-visible:ring-lime-200/40">
      <div className="h-full  space-y-3">

      <span className="text-slate-300 text-sm font-medium">Há 2 dias</span>
      <p className="text-slate-400 text-sm leading-5 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
        perspiciatis aspernatur rerum voluptatem harum, esse aperiam enim
        molestiae beatae quasi minima animi id quas eveniet necessitatibus totam
        illo ipsam officia. officia.
      </p>
      <div className="absolute bg-gradient-to-b from-transparent to-black/60 left-0 right-0 bottom-0 h-1/3 pointer-events-none" />
      </div>
    </button>
  );
}
