const btn = document.querySelector(".hamburguerMenu")
const menu = document.querySelector(".menuList")

btn.addEventListener("click", () => {
    if(menu.style.display === "none"){
        menu.style.display = "flex"
    }
    else {menu.style.display = "none"
    }
})
