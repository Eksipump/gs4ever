import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { DISCORD_URL, navLinks } from "../content";

export function Navbar() {
  return (
    <nav className="absolute inset-x-0 top-0 z-30 border-b border-white/10 bg-black/75 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/navbarLogo.png"
            alt="GS4EVER"
            width={56}
            height={56}
            priority
            className="h-16 w-auto object-contain"
          />

          <span>
            <b className="block font-serif text-lg tracking-widest">GS4EVER</b>
            <small className="block text-xs tracking-widest text-white/40">
              GUILD SELF-FOUND
            </small>
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className="hover:text-white">
              {label}
            </a>
          ))}
        </div>

        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded bg-violet-400 px-5 py-3 text-xs font-semibold text-black transition hover:bg-violet-300"
        >
          <MessageCircle size={17} />
          Rejoindre notre Discord
        </a>
      </div>
    </nav>
  );
}
