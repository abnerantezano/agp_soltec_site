document.addEventListener("DOMContentLoaded", function () {
    const menuBoton = document.querySelector(".menu-boton");
    const menuDeslizable = document.querySelector(".menu-deslizable");
    const cerrarMenu = document.querySelector(".cerrar-menu");
    const enlaces = document.querySelectorAll(".menu-deslizable a");

    // Mostrar el menú al presionar el botón
    menuBoton.addEventListener("click", () => {
        menuDeslizable.classList.add("active");
    });

    // Ocultar el menú al presionar el botón de cierre
    cerrarMenu.addEventListener("click", () => {
        menuDeslizable.classList.remove("active");
    });

    // Ocultar el menú al seleccionar un enlace
    enlaces.forEach((enlace) => {
        enlace.addEventListener("click", () => {
            menuDeslizable.classList.remove("active");
        });
    });
});
