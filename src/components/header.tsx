import logo from "../assets/Logo.svg";

interface HeaderProps {
  model: [string, (search: string) => void];
}

export function Header({ model }: HeaderProps) {
  const [search, setSearch] = model;

  return (
    <header className="space-y-6">
      <img src={logo} alt="logo nlw expert" />
      <form>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="bg-transparent outline-none text-2xl md:text-3xl font-semibold tracking-tight placeholder:text-slate-500 text-slate-200 max-w-full"
          type="text"
          placeholder="Busque em suas notas..."
        />
      </form>
    </header>
  );
}
