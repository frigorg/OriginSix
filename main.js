const menu = document.querySelector("#header .header-menu")
const menuBTN = document.querySelector("#header .icon-menu")
const closeBTN = document.querySelector("#header .icon-close")
const listItens = document.querySelectorAll(".header-menu li a");

function toggle() {
    let toggle = document.querySelectorAll("#header .toggle");
    toggle.forEach((e)=>{
        e.classList.toggle("hide");
    });
}

menuBTN.addEventListener("click", ()=>{
    menu.classList.add("header-menu_open");
    toggle();
})

closeBTN.addEventListener("click", ()=>{
    menu.classList.remove("header-menu_open");
    toggle();
})

for (const item of listItens) {
    item.addEventListener("click", ()=>{
        menu.classList.remove("header-menu_open");
        toggle();
    })
} 

const swiper = new Swiper('.swiper', {
direction: 'horizontal',
loop: true,
slidesPerView: 1,
pagination: {
    el: '.swiper-pagination',
},
breakpoints: {
840: {
    slidesPerView: 2,
    setWrapperSize: true,
}
}
});

ScrollReveal({
    delay: 100,
    origin: 'top',
    distance: '30px'
})
ScrollReveal().reveal( `#inicio, 
                        #sobre, 
                        #servicos, 
                        #depoimentos, 
                        #contato`);


const header = document.querySelector("#header");
const inicio = document.querySelector("#inicio");
const toTopBTN = document.querySelector(".toTopBTN");
const inicioHeight = inicio.offsetHeight;
const navHeight = header.offsetHeight;

function showToTopBTNWhenScroll() {
    if (window.scrollY >= navHeight+inicioHeight) {
        toTopBTN.classList.remove('hide');
    } else {
        toTopBTN.classList.add('hide');
    }
}
function modifyHeaderWhenScroll() {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
}

const sections = document.querySelectorAll("main section[id]")

function activeHeaderButtonsAsScrolls() {
    const yOffsetToMid = window.pageYOffset + window.innerHeight / 2;

    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const afterTopBoundary = yOffsetToMid >= sectionTop;
        const beforeBottomBoundary = yOffsetToMid <= sectionTop + sectionHeight

        if (afterTopBoundary && beforeBottomBoundary) {
            document
            .querySelector("#header .header-menu a[href*=" + sectionId + ']')
            .classList.add("active");
        } else {
            document
            .querySelector("#header .header-menu a[href*=" + sectionId + ']')
            .classList.remove("active");
        }
    }
}

window.addEventListener("scroll", ()=>{
    showToTopBTNWhenScroll();
    modifyHeaderWhenScroll();
    activeHeaderButtonsAsScrolls();
});