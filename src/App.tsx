import { Header } from "./components/header";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";
export function App() {
  return (
    <main className="py-16 px-32">
      
      <Header/>

      <div className="h-px my-8 bg-slate-700" />

      <section className="grid gap-4 grid-cols-3 auto-rows-[250px]">
        <NewNoteCard />
        <NoteCard
          note={{
            date: new Date(),
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis libero explicabo sit provident officiis quo minima repellat atque quas alias cupiditate fugiat autem, error tenetur maiores magni eius sequi nihil!",
          }}
        />
        <NoteCard
          note={{
            date: new Date(),
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis libero explicabo sit provident officiis quo minima repellat atque quas alias cupiditate fugiat autem, error tenetur maiores magni eius sequi nihil!",
          }}
        />
        <NoteCard
          note={{
            date: new Date(),
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis libero explicabo sit provident officiis quo minima repellat atque quas alias cupiditate fugiat autem, error tenetur maiores magni eius sequi nihil!",
          }}
        />
      </div>
    </div>
  );
}
