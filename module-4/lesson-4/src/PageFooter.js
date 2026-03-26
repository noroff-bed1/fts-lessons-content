class PageFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        page-footer footer {
          text-align: center;
          padding: 1rem;
          background: #1e1e2e;
          color: #cdd6f4;
          font-size: 0.9rem;
        }
      </style>
      <footer>Noroff &copy; ${new Date().getFullYear()}</footer>
    `;
  }
}
 
customElements.define("page-footer", PageFooter);