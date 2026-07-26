import { ParticleReveal } from "@/components/canvasui/ParticleReveal";

const LINKS = [
  {
    href: "https://github.com/metaory",
    label: "GitHub",
    accent: "link-fuchsia",
  },
  {
    href: "https://github.com/metaory?tab=repositories",
    label: "Repos",
    accent: "link-cyan",
  },
];

const STACK = [
  ["JavaScript", "text-amber-300"],
  ["Lua", "text-sky-300"],
  ["Bash", "text-lime-300"],
  ["JQ", "text-rose-300"],
  ["Vim", "text-emerald-300"],
  ["Arch", "text-cyan-300"],
];

export default function App() {
  return (
    <ParticleReveal
      background="#0a0a0a"
      style={{ height: "100dvh", width: "100%" }}
    >
      <main className="grid h-full place-content-center gap-6 bg-[#0a0a0a] px-6 text-center text-foreground">
        <img
          src="/avatar.png"
          alt=""
          width={112}
          height={112}
          className="avatar mx-auto size-28 rounded-[42px] p-2 transition-transform duration-300 ease-out hover:scale-105"
        />
        <h1 className="brand font-heading text-6xl font-extrabold md:text-8xl">
          metaory
        </h1>
        <p className="mx-auto max-w-md text-lg text-violet-200/70">
          Principal // Platform SWE
          <br />
          Solution Architect # AWS
        </p>
        <ul className="stack flex max-w-lg flex-wrap justify-center">
          {STACK.map(([label, accent]) => (
            <li
              key={label}
              className={`cursor-default text-xs font-medium tracking-wide uppercase ${accent}`}
            >
              {label}
            </li>
          ))}
        </ul>
        <nav className="flex justify-center gap-3 text-sm">
          {LINKS.map(({ href, label, accent }) => (
            <a
              key={href}
              href={href}
              className={`link rounded-sm border-[3px] px-5 py-2 font-bold no-underline ${accent}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <p className="mt-4 text-xs text-white/20 transition-colors duration-300 hover:text-white/45">
          Minimal · Vanilla · OSS
        </p>
      </main>
    </ParticleReveal>
  );
}
