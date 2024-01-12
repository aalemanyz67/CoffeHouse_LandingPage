//adding javascript to the burger icon for click capability
const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

//adding an eventlistener to toggle to the menu button
menuBtn.addEventListener("click", () =>{
    header.classList.toggle("show-mobile-menu");
});

//add eventlistener to close the menu
closeMenuBtn.addEventListener("click", () =>{
    menuBtn.click();
});