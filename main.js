let menu = document.querySelector("#header .header--menu")
let menu_btn = document.querySelector("#header .icon-menu")
let close_btn = document.querySelector("#header .icon-close")

function toggle() {
    let toggle = document.querySelectorAll("#header .toggle");
    toggle.forEach((e)=>{
        e.classList.toggle("hide");
    });
}

menu_btn.addEventListener("click", ()=>{
    menu.classList = "header--menu__open header--menu";
    toggle();
})

close_btn.addEventListener("click", ()=>{
    menu.classList = "header--menu";
    toggle();
})