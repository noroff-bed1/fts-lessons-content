import "./NavBar.js";
import "./InfoCard.js";
import "./PageFooter.js";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "sans-serif" }}>
      <nav-bar />

      <main style={{ flex: 1, padding: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
        <section id="about">
          <h1>About</h1>
          <p>Welcome to my page built with Web Components inside React.</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <info-card>
              <img slot="image" src="https://placehold.co/300x160" alt="Project Alpha" />
              <h2 slot="title">Project Alpha</h2>
              <p slot="description">A short description of project alpha goes here.</p>
            </info-card>

            <info-card>
              <img slot="image" src="https://placehold.co/300x160" alt="Project Beta" />
              <h2 slot="title">Project Beta</h2>
              <p slot="description">A short description of project beta goes here.</p>
            </info-card>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>sean.skinner@noroff.no</p>
        </section>
      </main>

      <page-footer />
    </div>
  );
}