import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoroffRetroVault — Classic Games Archive",
  description: "Explore a curated archive of legendary old-school video games.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 2.5rem", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, background: "rgba(10,10,15,0.9)", backdropFilter: "blur(8px)", zIndex: 100 }}>
          <a href="/" style={{ fontFamily: "var(--font-display)", fontSize: "0.7rem", color: "var(--accent)", textShadow: "0 0 12px var(--accent)" }}>
            <span style={{ color: "var(--accent-2)" }}>[</span>NoroffRetroVault<span style={{ color: "var(--accent-2)" }}>]</span>
          </a>
          <a href="/games" style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--text-secondary)", letterSpacing: "0.1em" }}>
            &gt; GAMES
          </a>
        </header>
        <main style={{ maxWidth: "1400px", margin: "0 auto", padding: "3rem 2.5rem", width: "100%" }}>
          {children}
        </main>
        <footer style={{ textAlign: "center", padding: "1.5rem", borderTop: "1px solid var(--border)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-muted)" }}>
          NoroffRetroVault - Powered by Noroff API
        </footer>
      </body>
    </html>
  );
}