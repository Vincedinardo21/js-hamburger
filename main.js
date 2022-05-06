const hamburger = document.querySelector("div.header-right");
const showMenu = document.querySelector("div.hamburger-menu");
const closeMenu = document.querySelector("a.close");

// Mostra il menu blu cliccando sull'hamburger
hamburger.addEventListener("click",
    function(){
        showMenu.style.display = "block";
    }
);

// Chiudi il menu blu cliccando sulla x
closeMenu.addEventListener("click",
    function(){
        showMenu.style.display = "none";
    }
);


