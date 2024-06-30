
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');
    const navLinks = document.querySelectorAll('.nav-list li a');

    menuIcon.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navList.classList.remove('show');
        });
    });
});
