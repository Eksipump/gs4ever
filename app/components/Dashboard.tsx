import { MessageCircle } from "lucide-react";
import { DISCORD_URL, progression, recruitment } from "../content";

export function Dashboard() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-4 px-6 py-10 lg:grid-cols-3">
      <article
        id="progression"
        className="border border-white/10 bg-white/5 p-5"
      >
        <div className="mb-5">
          <p className="mb-1 text-xs tracking-widest text-white/40">
            PROGRESSION
          </p>
          <h2 className="text-lg font-semibold">Avancée PvE</h2>
        </div>

        <div className="space-y-2">
          {progression.map(({ raid, score, status }) => (
            <div
              key={raid}
              className="flex items-center justify-between border border-white/10 bg-black/20 px-4 py-3"
            >
              <div>
                <b className="block text-xs">{raid}</b>
                <span className="mt-1 block text-xs text-white/40">
                  {score}
                </span>
              </div>

              <span className="rounded-full border border-violet-400/40 bg-violet-400/10 px-2 py-1 text-xs font-semibold text-violet-300">
                {status}
              </span>
            </div>
          ))}
        </div>
      </article>

      <article
        id="roster"
        className="flex flex-col border border-white/10 bg-white/5 p-5"
      >
        <div className="mb-5 flex items-start justify-between">
          <div>
            <p className="mb-1 text-xs tracking-widest text-white/40">
              MEMBRES
            </p>
            <h2 className="text-lg font-semibold">Roster</h2>
          </div>

          <span className="rounded-full border border-violet-400/40 bg-violet-400/10 px-2 py-1 text-xs font-semibold text-violet-300">
            Formation
          </span>
        </div>

        <div className="grid grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-5">
          <div>
            <strong className="block font-serif text-2xl font-normal text-white">
              —
            </strong>
            <span className="mt-1 block text-xs text-white/40">Tanks</span>
          </div>

          <div className="pl-5">
            <strong className="block font-serif text-2xl font-normal text-white">
              —
            </strong>
            <span className="mt-1 block text-xs text-white/40">Soigneurs</span>
          </div>

          <div className="pl-5">
            <strong className="block font-serif text-2xl font-normal text-white">
              —
            </strong>
            <span className="mt-1 block text-xs text-white/40">DPS</span>
          </div>
        </div>

        <div className="flex flex-1 items-end">
          <p className="text-xs leading-5 text-white/40">
            Le roster GS4EVER est en cours de formation. Les effectifs seront
            affichés au fil des recrutements.
          </p>
        </div>
      </article>

      <article
        id="recrutement"
        className="border border-white/10 bg-white/5 p-5"
      >
        <div className="mb-5">
          <p className="mb-1 text-xs tracking-widest text-white/40">BESOINS</p>
          <h2 className="text-lg font-semibold">Recrutement</h2>
        </div>

        <div className="space-y-2">
          {recruitment.map(({ className, status }) => (
            <div
              key={className}
              className="flex items-center justify-between border border-white/10 bg-black/20 px-4 py-3 text-xs"
            >
              <span>{className}</span>

              <b
                className={
                  status === "Priorité"
                    ? "text-amber-300"
                    : status === "Ouvert"
                      ? "text-emerald-300"
                      : "text-violet-300"
                }
              >
                {status}
              </b>
            </div>
          ))}
        </div>

        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex w-full items-center justify-center gap-2 rounded bg-violet-400 px-4 py-3 text-xs font-semibold text-black hover:bg-violet-300"
        >
          <MessageCircle size={15} />
          Postuler sur Discord
        </a>
      </article>
    </section>
  );
}
