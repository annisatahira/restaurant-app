class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero__inner">
            <h1 class="hero__title">Let's Grab A Bite To Eat</h1>
            <p class="hero__tagline">Yum Eat Provide You All The Best Restaurant with the Yummy Food</p>
        </div>
      </div>
  `;
  }
}

customElements.define("jumbotron-item", Jumbotron);
