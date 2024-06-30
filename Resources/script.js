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









function toggleFolder(id) {
    const folderContent = document.querySelector(`#${id} .folder-content`);
    if (folderContent.style.display === "block") {
        folderContent.style.display = "none";
    } else {
        folderContent.style.display = "block";
    }
}

function toggleSubFolder(element) {
    const subFolderContent = element.nextElementSibling;
    if (subFolderContent.style.display === "block") {
        subFolderContent.style.display = "none";
    } else {
        subFolderContent.style.display = "block";
    }
}