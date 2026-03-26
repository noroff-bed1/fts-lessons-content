"use client";

import Link from "next/link";
import Image from "next/image";
import { Game } from "@/types/game";
import { useState } from "react";

export default function GameCard({ game }: { game: Game }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/games/${game.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--bg-card)",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        cursor: "pointer",
        textDecoration: "none",
        transition: "all 0.25s",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 10px 40px rgba(0,0,0,0.5), 0 0 0 1px var(--accent)" : "none",
      }}
    >
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#050510", overflow: "hidden" }}>
        <Image
          src={game.image.url}
          alt={game.image.alt}
          fill
          sizes="(max-width:600px) 100vw, 33vw"
          style={{ objectFit: "cover", imageRendering: "pixelated" }}
          unoptimized
        />
        <div style={{ position: "absolute", bottom: "0.6rem", right: "0.7rem", zIndex: 2, fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent-3)", background: "rgba(10,10,15,0.8)", padding: "0.15em 0.5em", border: "1px solid var(--accent-3)" }}>
          {game.released}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", padding: "1.2rem", flex: 1 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {game.genre.map(g => (
            <span key={g} style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--accent-2)", border: "1px solid var(--accent-2)", padding: "0.1em 0.5em" }}>{g}</span>
          ))}
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "0.62rem", color: "var(--text-primary)", lineHeight: 1.5 }}>{game.name}</h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--text-secondary)", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{game.description}</p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "auto", paddingTop: "0.8rem", borderTop: "1px solid var(--border)" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: hovered ? "var(--accent)" : "var(--text-muted)", letterSpacing: "0.15em", transition: "color 0.25s" }}>LOAD GAME ▶</span>
        </div>
      </div>
    </Link>
  );
}