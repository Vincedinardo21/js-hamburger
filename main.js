const hamburger = document.querySelector("div.header-right");
const showMenu = document.querySelector("div.hamburger-menu");

hamburger.addEventListener("click",
    function(){
        showMenu.style.display = "block";
        console.log("Hide menu");
    }
);


