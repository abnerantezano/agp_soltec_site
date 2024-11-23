document.addEventListener("DOMContentLoaded", function () {
    const menuBoton = document.querySelector(".menu-boton");
    const menuDeslizable = document.querySelector(".menu-deslizable");
    const cerrarMenu = document.querySelector(".cerrar-menu");
    const enlaces = document.querySelectorAll(".menu-deslizable a"); 


    menuBoton.addEventListener("click", () => {
        menuDeslizable.classList.add("active");
    });


    cerrarMenu.addEventListener("click", () => {
        menuDeslizable.classList.remove("active");
    });

    enlaces.forEach((enlace) => {
        enlace.addEventListener("click", () => {

            enlaces.forEach((link) => link.classList.remove("active"));
            
            enlace.classList.add("active");

            menuDeslizable.classList.remove("active");
        });
    });
});
