// CLASS TOGGLING
window.onscroll = () => { myFn(); };
let navbar = document.querySelector(".navbar");
let a = document.getElementsByTagName("a");


function myFn(){
if(window.pageYOffset>20){
  navbar.classList.add("sticky");

}else{
  navbar.classList.remove("sticky")
}
}

// Scroll to Top

let btn = document.getElementById("gotoTopBtn");
function topFn(){
  document.documentElement.scrollTop = 0;
}
function toggleHome(){
  document.documentElement.scrollTop = 0;
}


// hamburger-menu

let ul = document.getElementById("idMenu");
let hamBtn = document.getElementById("idtoggleHam");
let hamI = document.getElementById("hamI");

hamBtn.addEventListener('click', function(){
  ul.classList.toggle('active');
hamI.classList.toggle("active");

});