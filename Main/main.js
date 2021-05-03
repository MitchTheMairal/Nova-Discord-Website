document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("load", () => {
        const loader = document.querySelector(".preloader");

        setTimeout(() => {
           loader.classList.add("fadeOut"); 
        }, 1000);

        loader.addEventListener("animationend", () => {
            loader.style.display = "none";
        })
    })
})