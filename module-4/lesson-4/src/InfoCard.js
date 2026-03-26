class InfoCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          border: 1px solid #ccc;
          border-radius: 8px;
          overflow: hidden;
          max-width: 300px;
          font-family: sans-serif;
        }
        ::slotted(img) { width: 100%; display: block; }
        .body { padding: 1rem; }
        ::slotted(h2) { margin: 0 0 0.5rem; font-size: 1.1rem; }
        ::slotted(p) { margin: 0; color: #555; font-size: 0.9rem; }
      </style>
      <slot name="image"></slot>
      <div class="body">
        <slot name="title"></slot>
        <slot name="description"></slot>
      </div>
    `;
  }
}

customElements.define("info-card", InfoCard);