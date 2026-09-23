import { ArrowRight, LockKeyhole, MessageCircle } from "lucide-react";
import { DISCORD_URL, faq, gsfRules, guildBenefits } from "../content";

export function GuildContent() {
  return (
    <>
<section
  id="guilde"
  className="border-t border-white/10 bg-black py-24"
>
  <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
    {/* Colonne gauche */}
    <div>
      <p className="mb-4 text-xs font-semibold tracking-widest text-violet-300">
        LE PROJET GS4EVER
      </p>

      <h2 className="font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">
        L&apos;aventure ensemble
        <br />
        sur <span className="text-violet-400">Forever.</span>
      </h2>

      <div className="mt-8 max-w-2xl space-y-5 text-sm leading-7 text-white/60">
        <p>
          <strong className="font-semibold text-white">GS4EVER</strong>{" "}
          est une guilde francophone passionnée, active et soudée sur
          World of Warcraft Forever. Du leveling au progress, on avance
          ensemble dans une aventure pensée pour durer.
        </p>

        <p>
          Nous avons choisi l&apos;aventure en{" "}
          <strong className="font-semibold text-white">
            Guild Self-Found
          </strong>{" "}
          : un mode de jeu qui met en avant l&apos;entraide, la
          coopération et la fierté de progresser avec nos propres moyens.
          Pas d&apos;Hôtel des Ventes, pas d&apos;achats externes :
          uniquement le fruit de notre progression collective.
        </p>

        <p>
          Que ce soit pour explorer les nouvelles zones, affronter des
          donjons inédits, préparer les raids de haut niveau ou simplement
          profiter du jeu entre amis,{" "}
          <strong className="font-semibold text-white">GS4EVER</strong>{" "}
          est avant tout une communauté où le plaisir et l&apos;esprit
          d&apos;équipe priment.
        </p>
      </div>
    </div>

    {/* Colonne droite */}
    <aside className="self-start border border-white/10 bg-white/5 p-6 md:p-8">
      <p className="font-serif text-xl text-violet-300">
        Ce que tu vas trouver chez nous
      </p>

      <div className="mt-5 h-px bg-white/10" />

      <div className="divide-y divide-white/10">
        {guildBenefits.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-4 py-6">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/10 text-violet-300">
              <Icon size={19} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-xs leading-5 text-white/50">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  </div>
</section>
<section id="gsf" className="border-t border-white/10 bg-zinc-950 py-24">
  <div className="mx-auto w-full max-w-6xl px-6">
    {/* Intro */}
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-4 text-xs font-semibold tracking-widest text-violet-300">
        NOTRE FAÇON DE JOUER
      </p>

      <h2 className="font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">
        Le Guild Self-Found,
        <br />
        <span className="text-violet-400">simplement.</span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50">
        Le principe est simple : tout ce dont nous avons besoin vient de
        nos aventures et de la guilde. Pas de raccourci économique, pas
        d&apos;équipement acheté ailleurs. On progresse avec ce que
        l&apos;on trouve, fabrique et partage ensemble.
      </p>
    </div>

    {/* Règles */}
    <div className="grid gap-4 md:grid-cols-2">
      {gsfRules.map((rule) => (
        <article
          key={rule.number}
          className="group border border-white/10 bg-white/5 p-7 transition hover:border-violet-400/30"
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="text-xs font-semibold tracking-widest text-violet-300">
              RÈGLE {rule.number}
            </span>
            <span className="font-serif text-3xl text-white/10">
              {rule.number}
            </span>
          </div>
          <h3 className="font-serif text-2xl text-white">{rule.title}</h3>
          <p className="mt-4 max-w-lg text-sm leading-6 text-white/50">
            {rule.text}
          </p>
        </article>
      ))}
    </div>

    {/* Addon */}
    <div className="mt-4 grid overflow-hidden border border-violet-400/20 bg-violet-400/10 lg:grid-cols-3">
      <div className="flex items-center justify-center border-b border-violet-400/10 p-6 lg:border-b-0 lg:border-r">
        <div className="flex size-12 items-center justify-center rounded-full border border-violet-400/30 bg-violet-400/10 text-violet-300">
          <LockKeyhole size={20} />
        </div>
      </div>

      <div className="p-6 lg:px-8">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <h3 className="font-serif text-xl text-white">
            L&apos;addon GS4EVER
          </h3>

          <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-2.5 py-1 text-xs font-semibold tracking-widest text-violet-300">
            FAIR-PLAY
          </span>
        </div>

        <p className="max-w-3xl text-xs leading-6 text-white/50">
          Pour que tout le monde relève le même défi, notre addon
          accompagne le mode GSF et permet de vérifier que les règles sont
          respectées. Il fonctionne discrètement en arrière-plan sans
          modifier l&apos;expérience de jeu.
        </p>
      </div>

      <div className="hidden items-center border-l border-violet-400/10 px-8 lg:flex">
        <p className="text-right font-serif text-lg italic leading-6 text-white/40">
          Même aventure.
          <br />
          Mêmes règles.
        </p>
      </div>
    </div>
  </div>
</section>
<section id="faq" className="border-t border-white/10 bg-black py-24">
  <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
    {/* Intro */}
    <div>
      <p className="mb-4 text-xs font-semibold tracking-widest text-violet-300">
        QUESTIONS FRÉQUENTES
      </p>

      <h2 className="font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">
        Encore une
        <br />
        <span className="text-violet-400">question ?</span>
      </h2>

      <p className="mt-6 max-w-sm text-sm leading-6 text-white/50">
        L&apos;essentiel pour savoir si l&apos;aventure GS4EVER est faite
        pour toi avant de nous rejoindre.
      </p>
    </div>

    <div className="divide-y divide-white/10 border-y border-white/10">
      {faq.map(({ question, answer }) => (
        <details key={question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
            <span className="text-sm font-medium text-white">
              {question}
            </span>
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-lg font-light text-violet-300 transition group-open:rotate-45 group-open:border-violet-400/30">
              +
            </span>
          </summary>
          <p className="max-w-2xl pb-6 pr-12 text-sm leading-6 text-white/50">
            {answer}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>
<section
  id="discord"
  className="border-t border-white/10 bg-violet-950/20 py-24 text-center"
>
  <p className="text-xs tracking-widest text-violet-300">GS4EVER</p>
  <h2 className="mt-4 font-serif text-5xl">
    Envie de tenter l'aventure ?
  </h2>
  <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/50">
    Viens dire bonjour sur Discord et découvrir la guilde.
  </p>
  <a
    href={DISCORD_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-7 inline-flex items-center gap-2 rounded bg-violet-400 px-5 py-3 text-xs font-semibold text-black hover:bg-violet-300"
  >
    <MessageCircle size={17} /> Rejoindre le Discord{" "}
    <ArrowRight size={15} />
  </a>
</section>
    </>
  );
}
