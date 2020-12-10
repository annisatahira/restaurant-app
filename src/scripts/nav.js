const main = () => {
  //load nav 
  const loadNav = () => {
    const xhttp = new XMLHttpRequest();
  }

  const hamburgerButtonElement = document.querySelector("#hamburger");
  const drawerElement = document.querySelector("#drawer");

  hamburgerButtonElement.addEventListener("click", event => {
      drawerElement.classList.toggle("open");
      event.stopPropagation();
  });

  const mainElement = document.querySelector("main");
  mainElement.addEventListener("click", event => {
      drawerElement.classList.remove("open");
      event.stopPropagation();
  });

  // Load page content
  let page = window.location.hash.substr(1);
  if (page === "") page = "home";
  console.log({page})

  const loadPage = (page) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4) {
        let content = document.querySelector("main");

        if (this.status === 200) {
          content.innerHTML = xhttp.responseText;

        } else if (this.status === 404) {
          content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
        } else {
          content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
        }
      }
    };
    xhttp.open("GET", "src/components/pages/" + page + ".html", true);
    xhttp.send();
  };

  loadPage(page);
};

export default main();