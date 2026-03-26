import { getAllGames } from "@/lib/api";
import GameCard from "@/components/GameCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Games — NoroffRetroVault",
};

export default async function GamesPage() {
  const games = await getAllGames();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent-2)", letterSpacing: "0.3em" }}>◈ THE COLLECTION</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem,4vw,2.2rem)", color: "var(--accent)", textShadow: "0 0 20px rgba(0,255,204,0.4)", letterSpacing: "0.15em", margin: "0.5rem 0" }}>
          GAME VAULT
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "1.1rem", color: "var(--text-muted)" }}>
          {games.length} classic titles. Select one to begin.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {games.map(game => <GameCard key={game.id} game={game} />)}
      </div>
    </div>
  );
}