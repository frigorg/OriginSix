const menu = document.querySelector("#header .header--menu")
const menu_btn = document.querySelector("#header .icon-menu")
const close_btn = document.querySelector("#header .icon-close")
const list_itens = document.querySelectorAll(".header--menu li a");

function toggle() {
    let toggle = document.querySelectorAll("#header .toggle");
    toggle.forEach((e)=>{
        e.classList.toggle("hide");
    });
}

menu_btn.addEventListener("click", ()=>{
    menu.classList.add("header--menu__open");
    toggle();
})

close_btn.addEventListener("click", ()=>{
    menu.classList.remove("header--menu__open");
    toggle();
})

for (const item of list_itens) {
    item.addEventListener("click", ()=>{
        menu.classList.remove("header--menu__open");
        toggle();
    })
} 

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener("scroll", ()=>{
    if (window.scrollY >= navHeight) {

        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  slidesPerView: 2,
  pagination: {
    el: '.swiper-pagination',
  },
});


ScrollReveal({reset: true, 
    delay: 100,
    origin: 'top',
    distance: '30px'
})
ScrollReveal().reveal('#inicio, #sobre, #servicos, #depoimentos, #contato');
// ScrollReveal().reveal('#inicio');
// ScrollReveal().reveal('#sobre');
// ScrollReveal().reveal('#servicos');
// ScrollReveal().reveal('#depoimentos');
// ScrollReveal().reveal('#contato');