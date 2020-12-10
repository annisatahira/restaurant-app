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
      </nav>
      <div class="hamburger-wrapper">
        <button id="hamburger" href="#">☰</button>
        <div class="mobile-logo-wrapper">
          <img class="mobile-logo" src="./images/logo.png" alt="logo-yum-eat" />
        </div>
      </div>
      
      `;
    }
  }
  
customElements.define("app-nav", NavApp);