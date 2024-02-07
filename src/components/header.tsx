import logo from "../assets/Logo.svg";

export function Header() {
  return (
    <div className="space-y-6">
      <img src={logo} alt="logo nlw" />
      <form>
        <input
          className="bg-transparent outline-none text-3xl font-semibold tracking-tight placeholder:text-slate-500 text-slate-200"
          type="text"
          placeholder="Busque em suas notas..."
        />
      </form>
    </div>
  );
}
