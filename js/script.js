const burgerButton = document.querySelector("#burger-button")
const menu = document.querySelector(".menu")
const navitems = document.querySelectorAll(".navbar-item")

burgerButton.addEventListener("click", activateMenu)

for (let i = 0; i <= navitems.length - 1; i++) { 
    navitems[i].addEventListener("click", activateMenu)    
}


function activateMenu (){
    // menu.classList.add("active")
    
    if (menu.classList.contains("active") == true) {
        menu.classList.remove("active")
    } else{
        menu.classList.add("active")
    }

}





