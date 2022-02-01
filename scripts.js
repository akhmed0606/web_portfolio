const portfolioApp = {};

portfolioApp.form = document.querySelector(".contactForm");
portfolioApp.projectButton = document.querySelectorAll(".projectButton");
portfolioApp.closeButton = document.querySelectorAll(".fa-times");
portfolioApp.closeMenu = document.querySelector(".menuClose");
portfolioApp.openMenu = document.querySelector(".menuOpen");
portfolioApp.mobileMenu = document.querySelector(".navBarMobile");

portfolioApp.openMenuButton = () => {
  portfolioApp.openMenu.addEventListener("click", () => {
    portfolioApp.mobileMenu.classList.replace("closed", "open");
  });
};

portfolioApp.menuCloseButton = () => {
  const childElements = portfolioApp.mobileMenu.childNodes;
  childElements.forEach((element) => {
    element.addEventListener("click", () => {
      portfolioApp.mobileMenu.classList.replace("open", "closed");
    });
  });
};
// This function targets the li elment that holds the projects and adds the overlay effect with the info on click or space/enter keydown

portfolioApp.showInfo = () => {
  for (let i = 0; i < portfolioApp.projectButton.length; i++) {
    portfolioApp.projectButton[i].addEventListener("click", function (event) {
      const button = event.target.parentNode;
      const project = button.parentNode;
      const overlay = project.childNodes[3];
      overlay.classList.add("active");
    });
  }
  for (let i = 0; i < portfolioApp.projectButton.length; i++) {
    portfolioApp.projectButton[i].addEventListener("keydown", (event) => {
      if (event.code == "Space" || event.code == "Enter") {
        const project = event.target.parentNode;
        const overlay = project.childNodes[3];
        overlay.classList.add("active");
      }
    });
  }
};

portfolioApp.closeInfo = () => {
  for (let i = 0; i < portfolioApp.closeButton.length; i++) {
    portfolioApp.closeButton[i].addEventListener("click", (event) => {
      const project = event.target.parentNode;
      project.classList.remove("active");
    });
  }
  for (let i = 0; i < portfolioApp.closeButton.length; i++) {
    portfolioApp.closeButton[i].addEventListener("keydown", function (event) {
      if (event.code == "Space" || event.code == "Enter") {
        const project = event.target.parentNode;
        project.classList.remove("active");
      }
    });
 }}


portfolioApp.init = () => {
  portfolioApp.showInfo();
  portfolioApp.closeInfo();
  portfolioApp.menuCloseButton();
  portfolioApp.openMenuButton();
  AOS.init();
};
portfolioApp.init();
