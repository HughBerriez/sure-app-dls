import Image from "next/image";

export default function Header() {
  const inputBg = "bg-white";

  return (
    <main>
      <header className="flex flex-row justify-between items-center px-8 border-b-[1px] border-b-slate-300">
        <div className="flex flex-row items-center">
          <Image
            src="/triangle-logo-mark.svg"
            alt="Triangles logo-mark"
            width={70}
            height={70}
          />
          <p className="text-teal-500 text-xl font-bold leading-7">Triangles</p>
        </div>

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
    </main>
  );
}
