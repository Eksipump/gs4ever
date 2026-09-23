import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <>
<footer className="border-t border-white/10 py-9">
  <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-5 px-6 text-xs text-white/40 sm:flex-row">
    <span>© GS4EVER — World of Warcraft Forever</span>
    <span>Des joueurs, une guilde, une histoire qui continue.</span>
  </div>
</footer>
<a
  href="#top"
  aria-label="Revenir en haut"
  className="fixed bottom-6 right-6 z-50 flex size-13 items-center justify-center rounded-md border border-violet-400 bg-violet-400 text-black shadow-lg shadow-black/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-zinc-950 hover:text-violet-400"
>
  <ArrowUp size={20} />
</a>
    </>
  );
}
