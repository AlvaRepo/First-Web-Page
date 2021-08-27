let btnMenu = document.getElementById('submenuBtn');
let submenu = btnMenu.firstElementChild.nextElementSibling;
function menuToggler (elementToggled,strClassToAdd) {
    elementToggled.firstElementChild.nextElementSibling.classList.toggle ('submenuClicked')
  }
btnMenu.addEventListener("click", function() {
    menuToggler(btnMenu);
})

