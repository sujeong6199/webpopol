var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
let menuMobile = document.querySelector("#menu_mobile");
let menuIcon = document.querySelector("#menu_icon");
let menuIconX = document.querySelector("#menu_icon_x");

menuIcon.addEventListener("click",()=>{
    menuMobile.style.visibility = "visible";
    menuMobile.style.opacity = 1;
});

menuIconX.addEventListener("click",()=>{
    menuMobile.style.visibility = "hidden";
    menuMobile.style.opacity = 0;
});
