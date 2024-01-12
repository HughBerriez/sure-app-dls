import Image from "next/image";
import Logo from "./Logo";

export default function Header() {
  const inputBg = "bg-white";

  return (
    <header className="flex flex-row justify-between items-center px-8 border-b-[1px] border-b-slate-300 py-3">
      <Logo theme="dark" />

      <div
        className={`flex flex-row border-[1px] rounded border-slate-300 px-5 py-3 ${inputBg}`}
      >
        <Image
          src="/magnifying-glass-outline.svg"
          alt="Triangles logo-mark"
          width={24}
          height={24}
        />
        <input placeholder="Search" className={inputBg} />
      </div>
    </header>
  );
}
