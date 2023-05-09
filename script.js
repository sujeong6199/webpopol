let mobileMenuIcon = document.querySelector("#mobile_menu_icon");
let mobileMenuIconX = document.querySelector("#mobile_menu_icon_x");
let menu = document.querySelector("#menu");

mobileMenuIcon.addEventListener("click",()=>{
    menu.style.transform ="translate(0%)";
});
mobileMenuIconX.addEventListener("click",()=>{
    menu.style.transform ="translate(100%)";
});

let mainMenu = document.querySelectorAll(".main_menu");
let subMenu = document.querySelectorAll(".sub_menu");
let arrow = document.querySelectorAll(".arrow");
mainMenu.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        if (subMenu[index].style.display == "block") {
            subMenu[index].style.display = "none";
            subMenu[index].style.opacity = "0";
            subMenu[index].style.visibility = "hidden";
            mainMenu[index].style.color = "#fff";
            arrow[index].innerHTML = "▶";
        } else {
            subMenu[index].style.display = "block";
            subMenu[index].style.opacity = "1";
            subMenu[index].style.visibility = "visible";
            mainMenu[index].style.color = "#fdd000";
            arrow[index].innerHTML = "▼"
        }
    });
});