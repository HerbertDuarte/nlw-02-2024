import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";

interface NewNoteCardProps {
  fn: (content: string) => void;
}

let speechRecognition: SpeechRecognition | null = null;
export function NewNoteCard({ fn }: NewNoteCardProps) {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
  const [content, setContent] = useState("");
  const [isRecording, setIsRecording] = useState(false);


  function handleStartEditor() {
    setIsRecording(false);
    setShouldShowOnboarding(false);
  }

  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault();

    if (content === "") {
      toast.error("Digite o conteúdo da nota!");
      return;
    }
    fn(content);
    setContent("");
    toast.success("Nota criada com sucesso!");
  }

  function handleStartRecord() {
    const isSpeechRecognitionAPIAvaible =
      "SpeechRecognition" in window || "webkitSpeechRecognition" in window;

    if (!isSpeechRecognitionAPIAvaible) {
      toast.error("Infelizmente seu navegador não suporta a API de gravação!");
      return;
    }

    setIsRecording(true);
    setShouldShowOnboarding(false);

    const SpeechRecognitionAPI =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    speechRecognition = new SpeechRecognitionAPI();

    speechRecognition.lang = "pt-BR";
    speechRecognition.continuous = true;
    speechRecognition.maxAlternatives = 1;
    speechRecognition.interimResults = true;

    speechRecognition.onresult = (event) => {
      const transcription = Array.from(event.results).reduce(
        (text, result) => {
          return text.concat(result[0].transcript);
        },
        ""
      );

      setContent(transcription);
    };

    speechRecognition.onerror = (e) => {
      toast.error(e.toString());
    };

    speechRecognition.start();
  }

  function handleStopRecord() {
    console.log("stop")
    setIsRecording(false);

    if(speechRecognition !== null) {
      speechRecognition.stop()
    }
  }

  function restartStates() {
    setShouldShowOnboarding(true);
    setContent("");
    setIsRecording(false);
  }

  useEffect(() => {
    if (content === "") {
      setShouldShowOnboarding(true);
    }
  }, [content, setContent]);

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
        <Dialog.Content className="fixed inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 outline-none flex flex-col md:rounded-md md:w-[95%] md:max-w-[640px] md:h-[60vh] overflow-hidden">
          <Dialog.Close
            onClick={restartStates}
            className="fixed top-0 right-0 z-20 justify-end p-1.5 bg-slate-800 text-slate-300 rounded-bl"
          >
            <X className="size-5" />
          </Dialog.Close>
          <form className="flex flex-col flex-1">
            <div className="flex flex-col flex-1 h-full w-full space-y-3 bg-slate-700 outline-none text-left p-5 relative">
              <span className="text-slate-300 text-sm font-medium">
                Adicionar nota
              </span>
              {shouldShowOnboarding ? (
                <p className="text-slate-400 text-sm leading-5 ">
                  Comece{" "}
                  <button
                    onClick={handleStartRecord}
                    type="button"
                    className="text-lime-400 hover:underline"
                  >
                    gravando uma nota
                  </button>{" "}
                  em áudio ou se preferir{" "}
                  <button
                    onClick={handleStartEditor}
                    type="button"
                    className="text-lime-400 hover:underline"
                  >
                    utilize apenas texto
                  </button>
                </p>
              ) : (
                <textarea
                  onChange={handleContentChange}
                  value={content}
                  autoFocus
                  className="text-sm leading-6 text-slate-400 resize-none flex-1 outline-none bg-transparent"
                />
              )}
            </div>
            {isRecording ? (
              <button
                type="button"
                onClick={handleStopRecord}
                className="w-full bg-slate-900 text-slate-300 py-2 group hover:text-slate-100 flex justify-center items-center gap-3"
              >
                <div className="size-3.5 bg-red-500 rounded-full animate-pulse" />{" "}
                Gravando! (clique p/ interromper)
              </button>
            ) : (
              <button
                onClick={handleSaveNote}
                type="button"
                className="w-full bg-lime-400 text-lime-950 font-bold py-2 group hover:bg-lime-500"
              >
                Salvar nota
              </button>
            )}
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
