import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { GuildContent } from "./components/GuildContent";
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 antialiased selection:bg-violet-400/30">
      <Navbar />
      <Header />
      <Dashboard />
      <GuildContent />
      <Footer />
    </main>
  );
}
