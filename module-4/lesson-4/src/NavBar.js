class NavBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        nav-bar nav {
          display: flex;
          gap: 1.5rem;
          padding: 1rem 2rem;
          background: #1e1e2e;
        }
        nav-bar a {
          color: #cdd6f4;
          text-decoration: none;
          font-size: 1rem;
        }
        nav-bar a:hover { text-decoration: underline; }
      </style>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);