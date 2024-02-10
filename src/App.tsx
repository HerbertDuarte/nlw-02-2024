import { useState } from "react";
import { Header } from "./components/header";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";
import { toast } from "sonner";
export function App() {
  interface Note {
    id: string;
    date: Date;
    content: string;
  }

  const searchModel = useState<string>("");
  const [search] = searchModel;
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem("notes");

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage);
    }

    return [];
  });

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };
    const notesArray = [newNote, ...notes];

    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  function onDeleteNote(id: string) {
    const notesArray = notes.filter((item) => item.id !== id);

    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));

    toast.info("Nota deletada com sucesso!");
  }

  const filterdNotes =
    search !== ""
      ? notes.filter((item) =>
          item.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : notes;

  return (
    <main className="p-5 md:p-10 lg:py-16 lg:px-16 ">
      <Header model={searchModel} />

      <div className="h-px my-8 bg-slate-700" />

      <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px]">
        <NewNoteCard fn={onNoteCreated} />
        {filterdNotes.map((note) => (
          <NoteCard key={note.id} note={note} fnDelete={onDeleteNote} />
        ))}
      </section>
    </main>
  );
}
