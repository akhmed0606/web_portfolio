const portfolioApp = {};

portfolioApp.form = document.querySelector('.contactForm');
portfolioApp.projectButton = document.querySelectorAll('.projectButton')
portfolioApp.closeButton = document.querySelectorAll('.fa-times')
portfolioApp.closeMenu = document.querySelector('.menuClose')
portfolioApp.openMenu = document.querySelector('.menuOpen')
portfolioApp.mobileMenu = document.querySelector('.navBarMobile')   

portfolioApp.openMenuButton = () => {
    portfolioApp.openMenu.addEventListener('click', () => {
        console.log('its wirjk')
  })
  portfolioApp.closeMenu.addEventListener('click', () => {
    document.getElementById('menu_checkbox').checked = false;
      portfolioApp.mobileMenu.classList.replace('closed', 'open');
    })
  }
  
  portfolioApp.menuCloseButton = () => {
    const childElements = portfolioApp.mobileMenu.childNodes;
    childElements.forEach (element => {
      element.addEventListener('click', () => {
        portfolioApp.mobileMenu.classList.replace('open', 'closed');  
      })
    });
  }

  for (let i =0; i < portfolioApp.projectButton.length; i++){
    portfolioApp.projectButton[i].addEventListener('click', function(event){
      const project = event.target.parentNode;
      const overlay = project.childNodes[1];
      overlay.classList.add('active');
    }) }

    for (let i =0; i < portfolioApp.projectButton.length; i++) {
        portfolioApp.projectButton[i].addEventListener('keydown', event => {
          if (event.code == 'Space' || event.code == 'Enter'){
            const project = event.target.parentNode;
            const overlay = project.childNodes[1];
            overlay.classList.add('active');
          }
        })
      }
    

      portfolioApp.closeInfo = () => {
        for (let i = 0; i < portfolioApp.closeButton.length; i++){
          portfolioApp.closeButton[i].addEventListener('click', function(event){
            const project = event.target.parentNode;
            project.classList.remove('active');
          })
        }
        for (let i = 0; i < portfolioApp.closeButton.length; i++){
          portfolioApp.closeButton[i].addEventListener('keydown', event => {
            if (event.code == 'Space' || event.code == 'Enter') {
              const project = event.target.parentNode;
            project.classList.remove('active');
            }
          })
      }}
      
      portfolioApp.init = () => {
        showInfo();
        closeInfo();
        menuCloseButton();
        openMenuButton();
        AOS.init();
      }
