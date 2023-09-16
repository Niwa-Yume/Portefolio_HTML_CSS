//Fonction qui permet d'avoir l'ouverture du menu burger avec l'icon
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const Icon = document.getElementById(".hamburger-icon");
    menu.classList.toggle("open");
    Icon.classList.toggle("open");
}