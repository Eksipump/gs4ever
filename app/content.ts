import {
  BarChart3,
  Hammer,
  MessageCircle,
  Shield,
  Sword,
  Users,
  type LucideIcon,
} from "lucide-react";

export const DISCORD_URL = "https://discord.gg/PfEFs3TSw";

export const navLinks = [
  { label: "Accueil", href: "#top" },
  { label: "Guilde", href: "#guilde" },
  { label: "GSF", href: "#gsf" },
  { label: "FAQ", href: "#faq" },
  { label: "Recrutement", href: "#discord" },
];

export const highlights: {
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
  { icon: Users, title: "Communauté active", text: "Des joueurs investis" },
  { icon: BarChart3, title: "Progression PvE", text: "On avance ensemble" },
  {
    icon: Sword,
    title: "Guild Self-Found",
    text: "Le collectif avant les raccourcis",
  },
  { icon: Shield, title: "Ambiance chill", text: "Sérieux sans prise de tête" },
];

export const progression = [
  {
    raid: "Barrow Deeps",
    score: "0 / 8",
    status: "Progress",
  },
  {
    raid: "Hyjal Summit",
    score: "0 / 13",
    status: "Progress",
  },
  {
    raid: "Onyxia's Lair",
    score: "0 / 1",
    status: "Progress",
  },
];

export const recruitment = [
  { className: "Chasseur", status: "Ouvert" },
  { className: "Prêtre", status: "Priorité" },
  { className: "Druide (Restauration)", status: "Ouvert" },
  { className: "Tous rôles motivés", status: "Toujours" },
];

export const guildBenefits: {
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
  {
    icon: MessageCircle,
    title: "Un Discord actif et chaleureux",
    text: "Des salons vocaux pour pexer en duo ou en escouade, papoter le soir et simplement passer un bon moment ensemble.",
  },
  {
    icon: Users,
    title: "Zéro pression e-sport",
    text: "La plupart d’entre nous ont un boulot, une vie de famille ou des études. On avance sérieusement, mais sans prise de tête.",
  },
  {
    icon: Hammer,
    title: "Une économie d’artisans",
    text: "Les métiers occupent une vraie place dans la guilde. Les ressources, équipements et consommables circulent entre les membres.",
  },
  {
    icon: Sword,
    title: "Donjons et raids maison",
    text: "Notre objectif est de découvrir et progresser sur le contenu de Forever avec les membres de la guilde, en apprenant ensemble.",
  },
];

export const gsfRules = [
  {
    number: "01",
    title: "Pas d’Hôtel des Ventes",
    text: "Aucun équipement, composant ou consommable n’est acheté à l’Hôtel des Ventes. Ce que nous utilisons provient du monde, des quêtes, des donjons, de nos métiers et de nos propres récoltes.",
  },
  {
    number: "02",
    title: "Les échanges restent dans la guilde",
    text: "On peut librement donner, troquer et partager entre membres de GS4EVER. En revanche, aucun commerce avec des joueurs extérieurs : notre économie repose entièrement sur le collectif.",
  },
  {
    number: "03",
    title: "Le courrier, entre nous uniquement",
    text: "La boîte aux lettres sert à faire circuler ressources, crafts et équipements entre membres. Aucun objet ou or ne doit entrer dans notre progression depuis l’extérieur de la guilde.",
  },
  {
    number: "04",
    title: "Les donjons se vivent ensemble",
    text: "Nos groupes sont composés en priorité de membres de GS4EVER. Pendant la progression, le pick-up reste possible lorsque nécessaire. Notre objectif reste de construire progressivement des groupes capables d’avancer entièrement en guilde.",
  },
];

export const faq = [
  {
    question: "Faut-il déjà connaître World of Warcraft pour nous rejoindre ?",
    answer:
      "Non. Débutant comme vétéran, tout le monde peut trouver sa place. L’important est surtout d’avoir envie de progresser avec le groupe et de participer à la vie de la guilde.",
  },
  {
    question: "Le Guild Self-Found est-il obligatoire ?",
    answer:
      "Oui. Le GSF fait partie de l’identité de GS4EVER. Tous les membres suivent les mêmes règles afin que notre progression reste collective et que chacun participe réellement à l’aventure.",
  },
  {
    question: "Y a-t-il un temps de jeu minimum demandé ?",
    answer:
      "Non. Nous cherchons surtout des joueurs qui s’inscrivent dans la durée. Chacun avance à son rythme, tant qu’il partage notre état d’esprit et participe à la communauté quand il le peut.",
  },
  {
    question: "Puis-je jouer la classe et la spécialisation que je veux ?",
    answer:
      "Oui. Nous préférons construire nos groupes autour des joueurs plutôt que d’imposer une méta. Les besoins affichés dans le recrutement indiquent simplement les profils particulièrement recherchés.",
  },
  {
    question: "Comment rejoindre GS4EVER ?",
    answer:
      "Le plus simple est de venir nous parler sur Discord. Pas de candidature interminable : on échange quelques minutes, on voit si l’état d’esprit correspond, puis on part à l’aventure.",
  },
];
