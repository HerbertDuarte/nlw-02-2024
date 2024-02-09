import { useState } from "react";
import { Header } from "./components/header";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";
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

  const filterdNotes =
    search !== ""
      ? notes.filter((item) =>
          item.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      : notes;

  return (
    <main className="py-16 px-32">
      <Header model={searchModel} />

      <div className="h-px my-8 bg-slate-700" />

      <section className="grid gap-4 grid-cols-3 auto-rows-[250px]">
        <NewNoteCard fn={onNoteCreated} />
        {filterdNotes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </section>
    </main>
  );
}
