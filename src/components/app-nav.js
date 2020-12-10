class NavApp extends HTMLElement {
  connectedCallback() {
      this.render();
  }

  render() {
    this.innerHTML = `
      <nav id="drawer" class="nav" role="navigation">
        <div class="logo-wrapper">
          <img class="logo" src="./images/logo.png" />
        </div>
        <ul class="nav__list">
          <li class="nav__item"><a href="#">Home</a></li>
          <li class="nav__item"><a href="#">Favorite</a></li>
          <li class="nav__item"><a href="#">About Us</a></li>
        </ul>
      </nav>`;
    }
  }
  
customElements.define("app-nav", NavApp);