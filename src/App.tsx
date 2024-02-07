import { Header } from "./components/header";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";
export function App() {
  return (
    <div className="py-16 px-32">
      
      <Header/>

      <div className="h-px my-8 bg-slate-700" />

      <div className="grid gap-4 grid-cols-3 auto-rows-[250px]">
        <NewNoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
}
