import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "70vh", textAlign: "center", gap: "1.5rem" }}>
      <h1 style={{ fontFamily: "var(--font-display)", lineHeight: 1.3 }}>
        <span style={{ display: "block", fontSize: "clamp(2rem,8vw,5rem)" }}>NOROFF</span>
        <span style={{ display: "block", fontSize: "clamp(2rem,8vw,5rem)" }}>CLASSIC</span>
        <span style={{ display: "block", fontSize: "clamp(3rem,12vw,8rem)", color: "var(--accent)", textShadow: "0 0 20px var(--accent)" }}>GAMES</span>
        <span style={{ display: "block", fontSize: "clamp(1rem,3vw,2rem)", color: "var(--text-secondary)", letterSpacing: "0.4em" }}>ARCHIVE</span>
      </h1>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "1.25rem", color: "var(--text-secondary)", maxWidth: "520px" }}>
        Dive into a pixel-perfect collection of legendary titles from gaming&apos;s golden age.
      </p>
      <Link href="/games" style={{ fontFamily: "var(--font-display)", fontSize: "0.65rem", color: "var(--bg)", background: "var(--accent)", padding: "1em 2em", letterSpacing: "0.1em", boxShadow: "0 0 20px rgba(0,255,204,0.3)" }}>
        &gt;&gt; BROWSE THE VAULT
      </Link>
    </div>
  );
}