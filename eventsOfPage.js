//Variables and Constants.
const windowWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
/*  */
const btnMenu = document.getElementById('submenuBtn');
const submenu = btnMenu.firstElementChild.nextElementSibling;
const responsiveMenu = document.querySelector('#responsiveMenu');
//show and tells
console.log(btnMenu);
console.log(windowWidth);
console.log(responsiveMenu);
console.log(responsiveMenu.parentNode.nextElementSibling.firstElementChild);


//Predefined Functions.
function menuFirstChildToggler (elementToggled,strClassToAdd) {
  elementToggled.firstElementChild.nextElementSibling.classList.toggle (strClassToAdd)};
function menuCousinToggler (elementToggled,strClassToAdd) {
  elementToggled.parentNode.nextElementSibling.firstElementChild.classList.toggle (strClassToAdd)}

/*  */
btnMenu.addEventListener("click", function(){
  menuFirstChildToggler (btnMenu,"subMenuClicked")
});
responsiveMenu.addEventListener("click", function(){
  menuCousinToggler (responsiveMenu,"responsiveMenuClicked")
});
  



