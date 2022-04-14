
// const tog=document.getElementById('toggle');
// const mbMenu=document.getElementById('mobilemenu');
// tog.onclick=function(){
//   tog.classList.toggle('active');
//   mbMenu.classList.toggle('active');
// }



//active Megamenu & mobile menu button
const toggle=document.getElementById('toggle');
const navMenu=document.getElementById('MegaMenu');
const mobileMenu=document.getElementById('mobilemenu');
const mobileDrop=document.getElementById('mobileDrop')
toggle.onclick=function(){
  toggle.classList.toggle('active');
  navMenu.classList.toggle('active');
  toggle.classList.toggle('show');
  mobileMenu.classList.toggle('show');
}
mobileDrop.onclick=function(){
  mobileDrop.classList.toggle('show')
}


//mobile config menu
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.height === "450px") {
  dropdownContent.style.height = "0";
  } else {
  dropdownContent.style.height = "450px";
  }
  });
}







var mbconfig = document.getElementsByClassName("mobile-config");
var j;

for (j = 0; j < mbconfig.length; j++) {
  mbconfig[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var mbconfigContent = this.nextElementSibling;
  if (mbconfigContent.style.height === "600px") {
    mbconfigContent.style.height = "0";
  } else {
    mbconfigContent.style.height = "600px";
  }
  });
}


// var mobileDrop = document.getElementsByClassName("mobile-config");
// var i;

// for (i = 0; i < mobileDrop.length; i++) {
//   mobileDrop[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var Drop = this.nextElementSibling;
//     if (Drop.style.maxHeight) {
//       Drop.style.maxHeight = null;
//     } else {
//       Drop.style.maxHeight = Drop.scrollHeight + "px";
//     }
//   });
// }