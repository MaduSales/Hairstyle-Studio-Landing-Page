var menuBtn = document.getElementById('menuBtn');
var sideNav = document.getElementById('sideNav');
var menu = document.getElementById('menu');
var menuIcon = document.getElementById('menuIconn');


sideNav.style.right = "-250px";

menuBtn.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menuIcon.classList.add('menuIconn')
    } else {
        sideNav.style.right = "-250px"
        menuIcon.classList.remove('menuIconn');
    }
}