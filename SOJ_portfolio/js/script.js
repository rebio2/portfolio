document.addEventListener('DOMContentLoaded', function() {
    console.log("Portfolio cargado correctamente.");
});

const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('hidden');
});

document.querySelectorAll('.project-container').forEach(item => {
    item.addEventListener('click', function() {
        const projectLink = this.querySelector('a'); // Buscar el primer enlace dentro del contenedor
        if (projectLink) {
            window.location.href = projectLink.href; // Redirigir al enlace
        }
    });
});