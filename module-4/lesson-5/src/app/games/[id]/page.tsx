import { getGameById, getAllGames } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

interface Props { params: { id: string } }

export async function generateStaticParams() {
  const games = await getAllGames();
  return games.map(game => ({ id: String(game.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const game = await getGameById(params.id);
    return { title: `${game.name} — RetroVault` };
  } catch {
    return { title: "Not Found — RetroVault" };
  }
}

export default async function GameDetailPage({ params }: Props) {
  let game;
  try { game = await getGameById(params.id); }
  catch { notFound(); }

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Link href="/games" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)", letterSpacing: "0.15em" }}>
        ◀ BACK TO VAULT
      </Link>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
        <div style={{ position: "sticky", top: "6rem" }}>
          <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 0 0 2px var(--border-glow), 0 0 40px rgba(61,61,255,0.15)" }}>
            <Image src={game.image.url} alt={game.image.alt} fill style={{ objectFit: "cover", imageRendering: "pixelated" }} unoptimized priority />
          </div>
          <div style={{ display: "flex", gap: "1.5rem", padding: "0.6rem 0.8rem", border: "1px solid var(--border)", background: "var(--bg-card)", marginTop: "1rem" }}>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-muted)", letterSpacing: "0.2em" }}>ID</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)" }}>#{String(game.id).padStart(4, "0")}</p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-muted)", letterSpacing: "0.2em" }}>SLUG</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)" }}>/{game.slug}</p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {game.genre.map(g => (
              <span key={g} style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--accent-2)", border: "1px solid var(--accent-2)", padding: "0.15em 0.6em" }}>{g}</span>
            ))}
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.85rem,2.5vw,1.3rem)", color: "var(--text-primary)", lineHeight: 1.5 }}>{game.name}</h1>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.8rem", padding: "0.6rem 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.2em" }}>RELEASED</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--accent-3)", textShadow: "0 0 10px rgba(255,230,0,0.4)" }}>{game.released}</span>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.25rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>{game.description}</p>
        </div>
      </div>
    </div>
  );
}