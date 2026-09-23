import { ArrowRight, MessageCircle } from "lucide-react";
import { DISCORD_URL, highlights } from "../content";
import { ReleaseCountdown } from "./ReleaseCoutdown";

export function Header() {
  return (
    <header>
      <section
        id="top"
        className="relative min-h-160 overflow-hidden border-b border-white/10 pt-20"
      >
        <div className="absolute inset-0 bg-[url('/header.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="relative mx-auto flex min-h-136 w-full max-w-6xl items-center px-6 py-16">
          <div className="max-w-xl">
            <p className="mb-6 flex items-center gap-3 text-xs tracking-widest text-white/60">
              <span className="h-px w-7 bg-violet-400" />
              GUILDE FRANCOPHONE
              <span className="text-white/30">—</span>
              WOW FOREVER
            </p>

            <h1 className="font-serif text-6xl leading-none tracking-tight md:text-7xl lg:text-8xl">
              GS4EVER
              <br />
              Ensemble sur
              <br />
              <span className="text-violet-400">Forever.</span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-7 text-white/60">
              Une guilde francophone passionnée, active et soudée sur World of
              Warcraft Forever. Du leveling au progress, on avance ensemble.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-violet-400 px-5 py-3 text-xs font-semibold text-black hover:bg-violet-300"
              >
                <MessageCircle size={17} />
                Rejoindre notre Discord
              </a>

              <a
                href="#guilde"
                className="inline-flex items-center gap-3 rounded border border-white/20 bg-black/20 px-5 py-3 text-xs font-medium hover:border-violet-400/50"
              >
                Découvrir la guilde
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <ReleaseCountdown />
        </div>
      </section>

      <section className="border-b border-white/10 bg-zinc-950">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 px-6 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex items-center gap-4 border-r border-white/10 px-5 py-6 first:border-l"
            >
              <Icon size={22} className="text-violet-400" />

              <div>
                <b className="block text-xs">{title}</b>
                <small className="mt-1 block text-xs text-white/40">
                  {text}
                </small>
              </div>
            </div>
          ))}
        </div>
      </section>
    </header>
  );
}
